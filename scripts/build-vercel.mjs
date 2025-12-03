#!/usr/bin/env node
import { execSync } from 'child_process';
import { cpSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

console.log('[Vercel Build] Starting client build with Vite...');
try {
  execSync('npx vite build --outDir dist/public', { 
    stdio: 'inherit', 
    cwd: rootDir,
    shell: true 
  });
  console.log('[Vercel Build] ✓ Client build complete');
} catch (e) {
  console.error('[Vercel Build] Client build failed');
  process.exit(1);
}

  // Ensure a top-level `public` directory exists for Vercel to pick up
  const srcPublic = join(rootDir, 'dist', 'public');
  const destPublic = join(rootDir, 'public');
  try {
    mkdirSync(destPublic, { recursive: true });
    cpSync(srcPublic, destPublic, { recursive: true, force: true });
    console.log('[Vercel Build] ✓ Copied dist/public -> public');
  } catch (err) {
    console.error('[Vercel Build] Failed copying dist/public -> public', err.message);
    process.exit(1);
  }

  console.log('[Vercel Build] Done - public ready for static deployment');
