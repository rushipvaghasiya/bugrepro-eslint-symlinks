import fs from 'fs-extra';
import path from 'node:path';

fs.ensureSymlinkSync(
  path.join(process.cwd(), 'link-src'),
  path.join(process.cwd(), 'src', 'link-src'),
  'dir'
);