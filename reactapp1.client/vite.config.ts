/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const isWindows = process.platform === 'win32';

let certFilePath: string | undefined;
let keyFilePath: string | undefined;

if (isWindows) {
  const baseFolder =
    env.APPDATA !== undefined && env.APPDATA !== ''
      ? `${env.APPDATA}/ASP.NET/https`
      : `${env.HOME}/.aspnet/https`;

  const certificateName = 'reactapp1.client';
  certFilePath = path.join(baseFolder, `${certificateName}.pem`);
  keyFilePath = path.join(baseFolder, `${certificateName}.key`);

  if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    if (
      0 !==
      child_process.spawnSync(
        'dotnet',
        [
          'dev-certs',
          'https',
          '--export-path',
          certFilePath,
          '--format',
          'Pem',
          '--no-password',
        ],
        { stdio: 'inherit' },
      ).status
    ) {
      throw new Error('Could not create certificate.');
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7074',
        secure: false,
      },
    },
    port: 5173,
    https: isWindows
      ? {
          key: fs.readFileSync(keyFilePath!),
          cert: fs.readFileSync(certFilePath!),
        }
      : undefined,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
