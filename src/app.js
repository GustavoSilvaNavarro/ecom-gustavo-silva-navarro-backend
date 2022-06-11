//CALL MODULES
<<<<<<< HEAD
const express = require('express');
const morgan = require('morgan');
=======
import express from "express";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';
>>>>>>> 395774c

//INITIALIZATIONS
const app = express();

//SETTINGS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('port', process.env.PORT || 8080);

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use(morgan('dev'));
<<<<<<< HEAD

//ROUTES
app.use(require('./routes/main-route.js'));
=======
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import mainRoute from './routes/main-route.js';

//ROUTES
app.use('/api/productos', mainRoute);
>>>>>>> 395774c

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});