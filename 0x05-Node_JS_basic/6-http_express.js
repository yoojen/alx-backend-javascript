const express = require('express');
const PORT = 1245;
const HOST_NAME = '127.0.0.1';
app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});
app.listen(PORT, HOST_NAME, () => {
  process.stdout.write(`Server running on: ${HOST_NAME}:${PORT}`);
});
