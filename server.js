import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Serve static files properly
app.use(express.static('build', { extensions: ['html', 'js', 'css', 'json'] }));

// Fix MIME issues
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve('build', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
