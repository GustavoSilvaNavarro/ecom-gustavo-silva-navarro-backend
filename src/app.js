//CALL MODULES
const express = require('express');
const morgan = require('morgan');

//INITIALIZATIONS
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);

//MIDDLEWARES
app.use(morgan('dev'));
//const mainRoute = require('./controllers/mainRoute-controller.js');

//ROUTES
app.use(require('./routes/main-route.js'));

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});