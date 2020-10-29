const express = require('express');
const apiRouter = require('./routes/api-routes.js');
// const db = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
