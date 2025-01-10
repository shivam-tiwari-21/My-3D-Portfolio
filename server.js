import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname=path.resolve();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
