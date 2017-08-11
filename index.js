const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', (process.env.PORT || 4200));

const server = http.createServer(app);
server.listen(app.get('port'), () => console.log('Running'));