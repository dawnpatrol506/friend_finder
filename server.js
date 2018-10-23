const express = require('express');
const app = express();
const port = 8080;
const apiRouter = require('./app/routing/apiRoutes');
const htmlRouter = require('./app/routing/htmlRoutes');

app.use('/api', apiRouter);
app.use('/', htmlRouter);
app.use('*', htmlRouter);


app.listen(port, () => console.log(`Listenting on port ${port}`));