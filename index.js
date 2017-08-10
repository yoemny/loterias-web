const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', (process.env.PORT || 3000));

const server = http.createServer(app);
server.listen(3000, () => console.log('Running'));