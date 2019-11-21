const express = require('express');

const app = express();

app.get('/', (res, req) => {
  req.send('Hello World');
});

app.listen(3000, () => {
  console.log('server started');
});
