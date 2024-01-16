import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Meme/',  // Base URL should be '/' for GitHub Pages
  assetsInclude: ['**/*.fbx'],
  optimizeDeps: {
    minimize: true,
    minimizerOptions: {
      removeComments: true,
      removeWhitespace: true,
    },
  },
});