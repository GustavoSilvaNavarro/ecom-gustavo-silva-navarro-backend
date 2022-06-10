//CALL MODULES
import express from "express";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';

//INITIALIZATIONS
const app = express();

//SETTINGS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('json spaces', 2);

//MIDDLEWARES
app.use(morgan('dev'));
import mainRoute from './routes/main-route.js';

//ROUTES
app.use('/', mainRoute);

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});