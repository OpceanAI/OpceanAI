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
      allowedHosts: ['a0d26032-22e2-4643-8b0f-e672bcee90c7-00-1dmesgp2add6z.spock.replit.dev']
    }
  }
});
