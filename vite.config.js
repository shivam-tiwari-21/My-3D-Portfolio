export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  base: '/', // Use '/' for root deployment
});
