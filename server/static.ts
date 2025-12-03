import express, { Express } from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function serveStatic(app: Express) {
  const publicDir = path.resolve(__dirname, "public");
  console.log("[static] __dirname:", __dirname);
  console.log("[static] publicDir:", publicDir);
  console.log("[static] index.html exists:", fs.existsSync(path.join(publicDir, "index.html")));
  
  // Serve static files
  app.use(express.static(publicDir));

  // SPA fallback - serve index.html for all non-API routes
  app.get("*", (req, res) => {
    const indexPath = path.join(publicDir, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not found");
    }
  });
}
