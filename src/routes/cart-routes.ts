//CALL MODULES
import { Router } from 'express';
const router = Router();

//IMPORTING CONTROLLERS
import { createNewCart, deleteCart, getAllProductsCart, addProductCart, deleteProduct } from '../controllers/cart-controllers';

//CONTROLLERS
//Post create cart
router.post('/', createNewCart);

//Delete cart
router.delete('/:id', deleteCart);

//Get products from cart
router.get('/:id/products', getAllProductsCart);

//POST add products to the cart
router.post('/:id/products/:idProduct', addProductCart);

//DELETE a product by id cart and id product
router.delete('/:id/products/:idProduct', deleteProduct);

//EXPORTING ROUTERS
export default router;