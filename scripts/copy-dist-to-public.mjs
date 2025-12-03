import { cpSync, rmSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const src = join(root, 'dist', 'public');
const dest = join(root, 'public');

try {
  // remove existing public if present
  try { rmSync(dest, { recursive: true, force: true }); } catch (e) {}
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true, force: true });
  console.log('✓ Copied dist/public -> public');
} catch (err) {
  console.error('Failed copying dist/public -> public:', err.message);
  process.exit(1);
}
