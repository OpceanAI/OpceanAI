import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      '4450090d-ba30-4437-8eb1-360dc0df0e4b-00-31ug8uur3m9oa.janeway.replit.dev',
      '.replit.dev',
      'localhost',
      '127.0.0.1'
    ]
  }
});