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

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use(morgan('dev'));
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import mainRoute from './routes/main-route.js';

//ROUTES
app.use('/api/productos', mainRoute);

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});