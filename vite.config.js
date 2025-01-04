import { defineConfig } from 'vite'; // Import defineConfig
import react from '@vitejs/plugin-react'; // Import the React plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // Pass environment variables
  },
  server: {
    port: process.env.PORT || 3000, // Use Render's PORT variable
    host: '0.0.0.0', // Bind to all network interfaces
  },
  preview: {
    port: process.env.PORT || 3000, // Same as server settings
    host: '0.0.0.0',
  },
  base: '/', // Adjust this if deploying to a subdirectory
});
