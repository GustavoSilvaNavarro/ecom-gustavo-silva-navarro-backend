//CALL MODULES
import { Router } from 'express';
const router = Router();

const admin = false;

//IMPORTING CONTROLLERS
import { addNewProduct, updateProduct, deleteProduct } from '../../controllers/products-controllers.js';

//MIDDLEWARES
function areYouAdmin(req, res, next) {
    if(admin) {
        next();
    } else {
        const err = new Error('You are not authorized to access this route');
        err.status = 401;
        next(err);
    }
};

//ROUTES
//Post Add new product
router.post('/', areYouAdmin, addNewProduct);

//Put Update product by its id
router.put('/:id', areYouAdmin, updateProduct);

//Delete product by its id
router.delete('/:id', areYouAdmin, deleteProduct);

export default router;