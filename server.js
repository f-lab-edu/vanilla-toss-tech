import express from 'express';
import path from 'path';

const DEFAULT_PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();
const app = express();

app.use('/src', express.static(path.resolve(__dirname, 'src')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(DEFAULT_PORT, () => {
  console.log(`Sample app listening on port ${DEFAULT_PORT}!`);
});
