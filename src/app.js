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
// app.set('json spaces', 2);

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import productsRoutes from './routes/products-routes.js';
import cartRoutes from './routes/cart-routes.js';

//ROUTES
app.use('/api/products', productsRoutes);
app.use('/api/carts', cartRoutes);

//NON EXISTENCE ROUTES
app.use((req, res, next) => {
    const err = new Error('Not found!');
    err.status = 404;
    next(err);
});

//ERROR HANDLERS
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: { status: err.status || 500, message: err.message } });
});

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});