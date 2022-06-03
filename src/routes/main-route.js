//CALL MODULES
import { Router } from 'express';
const router = Router();

//IMPORTING CONTROLLERS
import { mainController, randomProductController } from '../controllers/mainRoute-controller.js';

//ROUTES
//Main page
router.get('/', mainController);

//Random product
router.get('/randomProduct', randomProductController);

//EXPORTING ROUTES
export default router;