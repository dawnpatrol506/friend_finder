const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const apiRouter = require('./app/routing/apiRoutes');
const htmlRouter = require('./app/routing/htmlRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRouter);
app.use('/', htmlRouter);
app.use('*', htmlRouter);


app.listen(port, () => console.log(`Listenting on port ${port}`));