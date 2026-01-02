import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

// Configuración para GitHub Pages
// Si tu repositorio está en: usuario.github.io/Portfolio-2026
// El base debe ser: '/Portfolio-2026/'
// Si está en la raíz: usuario.github.io, cambia a: '/'
export default defineConfig({
  base: '/Portfolio-2026/',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

