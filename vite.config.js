import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Adjust this if deploying to a subdirectory
  build: {
    outDir: 'dist', // Change output folder to 'dist'
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate React and ReactDOM into a vendor chunk
          three: ['three'], // Separate three.js into its own chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Avoid chunk size warnings
  },
  server: {
    port: 3000,
    host: '0.0.0.0', // Necessary for Render to expose the server externally
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
});
