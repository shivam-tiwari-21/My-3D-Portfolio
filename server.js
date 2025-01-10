import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname=path.resolve();

const port = process.env.PORT || 3000;

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// For SPA, always serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
