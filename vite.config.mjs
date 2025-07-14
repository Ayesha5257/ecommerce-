import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // 👇 This base is for GitHub Pages
  base: '/ecommerce-/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        products: resolve(__dirname, 'products.html'),
        addToCart: resolve(__dirname, 'addToCart.html'),
      },
    },
  },
});



