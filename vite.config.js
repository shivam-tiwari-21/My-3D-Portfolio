import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // Pass environment variables explicitly
  }, server: {
    port: process.env.PORT || 3000, // Use Render's PORT variable or default to 3000
    host: '0.0.0.0', // Bind to all network interfaces
  },
  preview: {
    port: process.env.PORT || 3000, // Use Render's PORT variable or default to 3000
    host: '0.0.0.0', // Bind to all network interfaces
  },
})
