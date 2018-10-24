const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./app/routing/apiRoutes');
const htmlRouter = require('./app/routing/htmlRoutes');
const exphbs = require('express-handlebars');
const path = require('path');

const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, '/app/public'));
app.engine('handlebars', exphbs({layoutsDir: path.join(__dirname, '/app/public')}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRouter);
app.use('/', htmlRouter);
app.use('*', htmlRouter);


app.listen(port, () => console.log(`Listenting on port ${port}`));