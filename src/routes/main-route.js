//CALL MODULES
const { Router } = require('express');
const router = Router();

//IMPORTING CONTROLLERS
const { mainController, randomProductController } = require('../controllers/mainRoute-controller.js');

//ROUTES
//Main page
router.get('/', mainController);

//Random product
router.get('/randomProduct', randomProductController);

//EXPORTING ROUTES
module.exports = router;