import { execSync } from 'child_process';
import { cpSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

console.log('Building client...');
try {
  execSync('npm run build:client', { stdio: 'inherit', cwd: rootDir });
} catch (e) {
  console.error('Client build failed:', e.message);
  process.exit(1);
}

// Copy client build output from client/dist/public to dist/public
console.log('\nCopying client build output...');
const srcPublic = join(rootDir, 'client/dist/public');
const destPublic = join(rootDir, 'dist/public');
try {
  mkdirSync(destPublic, { recursive: true });
  cpSync(srcPublic, destPublic, { recursive: true, force: true });
  console.log('✓ Client build copied to dist/public');
} catch (e) {
  console.error('Failed to copy client build:', e.message);
  process.exit(1);
}

console.log('\nBuilding server...');
try {
  // Use build-server.mjs directly to transpile server files to ESM
  const buildServerPath = join(rootDir, 'scripts/build-server.mjs');
  execSync(`node "${buildServerPath}"`, { stdio: 'inherit', shell: true });
} catch (e) {
  console.error('Server build failed:', e.message);
  process.exit(1);
}

console.log('\n✓ Full build complete');

