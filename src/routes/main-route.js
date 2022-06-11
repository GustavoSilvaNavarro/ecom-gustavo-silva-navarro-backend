//CALL MODULES
const { Router } = require('express');
const router = Router();

//IMPORTING CONTROLLERS
import { mainController, addNewProduct, singleProduct, updateProduct, deleteProduct } from '../controllers/mainRoute-controller.js';

//ROUTES
//Main page
router.get('/', mainController);

//Add a new product - POST
router.post('/', addNewProduct);

//Find a product by its ID
router.get('/:id', singleProduct);

//Update a product base on his ID
router.put('/:id', updateProduct);

//Delete a product base on its ID
router.delete('/:id', deleteProduct);

//EXPORTING ROUTES
module.exports = router;