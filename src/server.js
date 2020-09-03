const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { join } = require('path');
const morgan = require('morgan');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

//==================================Initializations
const app = express();

//==================================Settings
//-------------port config
app.set('port', process.env.PORT || 5000);
//-------------config to tell node where the folder 'views' is
app.set('views', path.join(__dirname, 'views'));
//------------config of the template engine handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');
//==================================Middlewares
//every time we get data from a form, this middleware converts it to a json format
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//==================================Global Variables

//==================================Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/cliente.routes'));
//==================================Static Files
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;