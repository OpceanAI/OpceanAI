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
      allowedHosts: ["4aed061d-8fe1-44d1-9c9e-ad3449ef80a9-00-29qcqo35qqaj6.worf.replit.dev", "360e8c37-cc7e-4fc6-8544-cb3aba7dec8c-00-8qtem5e4b92k.kirk.replit.dev", "d6ab6ddf-431e-462f-a85b-85ec47fbd737-00-2ubsrgwqu7c0f.spock.replit.dev", "localhost", "127.0.0.1"]
    },
    preview: {
      allowedHosts: ["4aed061d-8fe1-44d1-9c9e-ad3449ef80a9-00-29qcqo35qqaj6.worf.replit.dev", "360e8c37-cc7e-4fc6-8544-cb3aba7dec8c-00-8qtem5e4b92k.kirk.replit.dev", "d6ab6ddf-431e-462f-a85b-85ec47fbd737-00-2ubsrgwqu7c0f.spock.replit.dev", "localhost", "127.0.0.1"]
    }
  }
});
