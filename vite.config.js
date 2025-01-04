import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this if deploying to a subdirectory
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate React and ReactDOM into a vendor chunk
          three: ['three'], // Separate three.js into its own chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // This should be placed here, not inside rollupOptions
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
});
