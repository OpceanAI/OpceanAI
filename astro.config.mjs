import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false
  },
  server: {
    host: true,
    port: 5000
  },
  vite: {
    server: {
      allowedHosts: ["4aed061d-8fe1-44d1-9c9e-ad3449ef80a9-00-29qcqo35qqaj6.worf.replit.dev", "localhost", "127.0.0.1"]
    },
    preview: {
      allowedHosts: ["4aed061d-8fe1-44d1-9c9e-ad3449ef80a9-00-29qcqo35qqaj6.worf.replit.dev", "localhost", "127.0.0.1"]
    }
  }
});
