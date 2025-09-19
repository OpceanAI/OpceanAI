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
      allowedHosts: true
    }
  }
});
