#!/usr/bin/env node
import { execSync } from "child_process";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve, join } from "path";

const serverDir = resolve("server");
const distDir = resolve("dist");

// Get all .ts files in server/
const files = readdirSync(serverDir).filter(f => f.endsWith(".ts"));

// Transpile each file individually
for (const file of files) {
  const inputPath = join(serverDir, file);
  const outputPath = join(distDir, file.replace(".ts", ".mjs"));
  
  const cmd = `npx esbuild "${inputPath}" --outfile="${outputPath}" --platform=node --target=node18 --format=esm --packages=external`;
  
  try {
    console.log(`Building ${file}...`);
    execSync(cmd, { stdio: "inherit" });
  } catch (err) {
    console.error(`Failed to build ${file}:`, err.message);
    process.exit(1);
  }
  
  // Post-process index.mjs to remove dev-only imports
  if (file === "index.ts") {
    let content = readFileSync(outputPath, "utf-8");
    // Fix imports to use .mjs extension
    content = content.replace(/from "\.\/app"/g, 'from "./app.mjs"');
    content = content.replace(/from "\.\/static"/g, 'from "./static.mjs"');
    // Remove conditional import for vite (dev-only) to avoid module resolution issues
    content = content.replace(
      /const\s*{\s*setupVite\s*}\s*=\s*await\s*import\("\.\/vite"\);[\s\n]*await\s*setupVite\(httpServer,\s*app\);/,
      "// Vite setup skipped in production"
    );
    // Simplify listen call
    content = content.replace(
      /httpServer\.listen\(\s*{\s*port,\s*host:\s*"0\.0\.0\.0",\s*reusePort:\s*true\s*},\s*\(\)\s*=>\s*{\s*log\(`serving on port \$\{port\}`\);\s*}\s*\);/,
      'httpServer.listen(port, "127.0.0.1", () => {\n    log(`serving on http://127.0.0.1:${port}`);\n  });'
    );
    writeFileSync(outputPath, content);
  }
  
  // Post-process app.mjs to fix imports
  if (file === "app.ts") {
    let content = readFileSync(outputPath, "utf-8");
    content = content.replace(/from "\.\/routes"/g, 'from "./routes.mjs"');
    writeFileSync(outputPath, content);
  }
}

console.log("✓ Server build complete");

