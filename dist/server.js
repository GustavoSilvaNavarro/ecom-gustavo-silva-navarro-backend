/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_dbMongo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/dbMongo */ \"./src/config/dbMongo.ts\");\n/* harmony import */ var _routes_products_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/products-routes */ \"./src/routes/products-routes.ts\");\n/* harmony import */ var _routes_cart_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/cart-routes */ \"./src/routes/cart-routes.ts\");\n//CALL MODULES\r\n\r\n\r\n\r\n\r\n\r\n\r\n//INITIALIZATIONS\r\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\r\n(0,_config_dbMongo__WEBPACK_IMPORTED_MODULE_5__.connectDB)();\r\n//SETTINGS\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().dirname((0,url__WEBPACK_IMPORTED_MODULE_4__.fileURLToPath)(\"file:///C:/Users/gsnav/OneDrive/Escritorio/code/coderHouse/backend/ecom-gustavo-silva-navarro-backend/src/app.ts\"));\r\napp.set('port', process.env.PORT || 8080);\r\n// app.set('json spaces', 2);\r\n//STATIC FILES\r\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, 'public')));\r\n//MIDDLEWARES\r\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev'));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({ extended: false }));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\r\n\r\n\r\n//ROUTES\r\napp.use('/api/products', _routes_products_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\napp.use('/api/carts', _routes_cart_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n//NON EXISTENCE ROUTES\r\napp.use((_req, _res, next) => {\r\n    const err = new Error('Not found!');\r\n    err.status = 500;\r\n    next(err);\r\n});\r\n//ERROR HANDLERS\r\napp.use((err, _req, res, _next) => {\r\n    res.status(err.status || 500).json({ error: { status: err.status || 500, message: err.message } });\r\n});\r\n//SERVER\r\napp.listen(app.get('port'), () => {\r\n    console.log('Server on Port:', app.get('port'));\r\n});\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/app.ts?");

/***/ }),

/***/ "./src/config/dbMongo.ts":
/*!*******************************!*\
  !*** ./src/config/dbMongo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n//SETTING CONNECTION\r\nasync function connectDB() {\r\n    try {\r\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect('mongodb://127.0.0.1/ecommerce-gsn-coderHouse');\r\n        console.log(`DB is connected to ${db.connection.db.databaseName}`);\r\n    }\r\n    catch (err) {\r\n        console.log(err);\r\n    }\r\n    ;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/config/dbMongo.ts?");

/***/ }),

/***/ "./src/containers/containerMongo.ts":
/*!******************************************!*\
  !*** ./src/containers/containerMongo.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product-model */ \"./src/models/product-model.ts\");\n/* harmony import */ var _models_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cart-model */ \"./src/models/cart-model.ts\");\n\r\n\r\n//TYPESCRIPT TYPES\r\n// type SingleProduct = {\r\n//     nombre: string,\r\n//     timestamp: number,\r\n//     description: string,\r\n//     codigo: string,\r\n//     url: string,\r\n//     precio: number,\r\n//     stock: number\r\n// };\r\n// type SingleCart = {\r\n//     products: SingleProduct[]\r\n// };\r\nclass ContainerMongo {\r\n    async saveData(data, ruta) {\r\n        try {\r\n            if (ruta === 'Product') {\r\n                const newProduct = new _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n                await newProduct.save();\r\n                return newProduct._id;\r\n            }\r\n            else {\r\n                const newCart = new _models_cart_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n                await newCart.save();\r\n                return newCart._id;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //READ DATA\r\n    async readAllData() {\r\n        try {\r\n            const allData = await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\r\n            if (allData.length > 0) {\r\n                return allData;\r\n            }\r\n            else {\r\n                const err = new Error('Collection is empty!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Get data by its id\r\n    async listOneData(id, ruta) {\r\n        try {\r\n            let data;\r\n            if (ruta === 'Product') {\r\n                data = await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\r\n            }\r\n            else {\r\n                data = await _models_cart_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\r\n            }\r\n            ;\r\n            if (data !== null) {\r\n                return data;\r\n            }\r\n            else {\r\n                const err = new Error(`${ruta} does not exist!`);\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n    }\r\n    ;\r\n    //UPDATE DATA\r\n    async updateData(id, dataToUpdate, ruta) {\r\n        try {\r\n            let updatedData;\r\n            if (ruta === 'Product') {\r\n                updatedData = await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(id, dataToUpdate);\r\n            }\r\n            else {\r\n                updatedData = await _models_cart_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, dataToUpdate);\r\n            }\r\n            ;\r\n            if (updatedData !== null) {\r\n                return `${ruta} updated!`;\r\n            }\r\n            else {\r\n                const err = new Error(`${ruta} does not exist. It can not be modified!`);\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Delete data\r\n    async deleteData(id, ruta) {\r\n        try {\r\n            let deletedData;\r\n            if (ruta === 'Product') {\r\n                deletedData = await _models_product_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(id);\r\n            }\r\n            else {\r\n                deletedData = await _models_cart_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\r\n            }\r\n            ;\r\n            if (deletedData !== null) {\r\n                return `${ruta} deleted!`;\r\n            }\r\n            else {\r\n                const err = new Error(`${ruta} does not exist. It can not be deleted!`);\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n}\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerMongo);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/containers/containerMongo.ts?");

/***/ }),

/***/ "./src/containers/daos/cart/cartMongo.ts":
/*!***********************************************!*\
  !*** ./src/containers/daos/cart/cartMongo.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containerMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containerMongo */ \"./src/containers/containerMongo.ts\");\n/* harmony import */ var _models_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/cart-model */ \"./src/models/cart-model.ts\");\n\r\n\r\nclass CartMongo extends _containerMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    //INSERT DATA\r\n    async addCart() {\r\n        try {\r\n            return await this.saveData(null, process.env.DATABASE_NAME_CART);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    async deleteOneCart(id) {\r\n        try {\r\n            return await this.deleteData(id, process.env.DATABASE_NAME_CART);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    async addOneProductToCart(idCart, idProduct) {\r\n        try {\r\n            const selectedCart = await this.listOneData(idCart, process.env.DATABASE_NAME_CART);\r\n            const productToAdd = await this.listOneData(idProduct, process.env.DATABASE_NAME_PRODUCT);\r\n            if (selectedCart.products.length > 0 && productToAdd !== null) {\r\n                const productsAddtion = [...selectedCart.products, idProduct];\r\n                return await this.updateData(idCart, { products: productsAddtion }, process.env.DATABASE_NAME_CART);\r\n            }\r\n            else {\r\n                return await this.updateData(idCart, { products: idProduct }, process.env.DATABASE_NAME_CART);\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //GET ALL PRODUCTS FROM SELECTED CART\r\n    async listAllProductsFromCart(idCart) {\r\n        try {\r\n            const cartSeleccionado = await _models_cart_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(idCart, { products: 1, _id: 0 }).populate('products', '-createdAt -updatedAt -__v');\r\n            if (cartSeleccionado !== null) {\r\n                if (cartSeleccionado.products.length > 0) {\r\n                    return cartSeleccionado;\r\n                }\r\n                else {\r\n                    const err = new Error('Cart is empty!');\r\n                    err.status = 400;\r\n                    throw err;\r\n                }\r\n            }\r\n            else {\r\n                const err = new Error('Cart does not exist!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Delete product from a selected Cart\r\n    async deleteOneProductFromCart(idCart, idProduct) {\r\n        try {\r\n            const selectedCart = await this.listOneData(idCart, process.env.DATABASE_NAME_CART);\r\n            const productToDelete = await this.listOneData(idProduct, process.env.DATABASE_NAME_PRODUCT);\r\n            if (selectedCart.products.length > 0 && productToDelete !== null) {\r\n                const allProducts = await _models_cart_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(idCart, { products: 1, _id: 0 }).populate('products', { _id: 1 }).exec();\r\n                // allProducts.products.map(item => console.log(item._id.toString()));\r\n                // console.log(productToDelete._id);\r\n                const restoProductos = allProducts.products.filter(item => item._id.toString() !== productToDelete.id);\r\n                console.log(restoProductos);\r\n                return await this.updateData(idCart, { products: restoProductos }, process.env.DATABASE_NAME_CART);\r\n            }\r\n            else {\r\n                const err = new Error('Cart does not have products to delete!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n    }\r\n    ;\r\n}\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CartMongo());\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/containers/daos/cart/cartMongo.ts?");

/***/ }),

/***/ "./src/containers/daos/products/productMongo.ts":
/*!******************************************************!*\
  !*** ./src/containers/daos/products/productMongo.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containerMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containerMongo */ \"./src/containers/containerMongo.ts\");\n\r\nclass ProductsMongo extends _containerMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    //INSERT DATA\r\n    async addProduct(dataProduct) {\r\n        try {\r\n            return await this.saveData(dataProduct, process.env.DATABASE_NAME_PRODUCT);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //GET ALL USERS\r\n    async listAllProducts() {\r\n        try {\r\n            return await this.readAllData();\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    async listOneProduct(id) {\r\n        try {\r\n            return await this.listOneData(id, process.env.DATABASE_NAME_PRODUCT);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n    }\r\n    ;\r\n    async updateOneProduct(id, product) {\r\n        try {\r\n            return await this.updateData(id, product, process.env.DATABASE_NAME_PRODUCT);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    async deleteOneProduct(id) {\r\n        try {\r\n            return await this.deleteData(id, process.env.DATABASE_NAME_PRODUCT);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n}\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductsMongo());\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/containers/daos/products/productMongo.ts?");

/***/ }),

/***/ "./src/controllers/cart-controllers.ts":
/*!*********************************************!*\
  !*** ./src/controllers/cart-controllers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProductCart\": () => (/* binding */ addProductCart),\n/* harmony export */   \"createNewCart\": () => (/* binding */ createNewCart),\n/* harmony export */   \"deleteCart\": () => (/* binding */ deleteCart),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"getAllProductsCart\": () => (/* binding */ getAllProductsCart)\n/* harmony export */ });\n/* harmony import */ var _containers_daos_cart_cartMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/daos/cart/cartMongo */ \"./src/containers/daos/cart/cartMongo.ts\");\n//import cartsFS from '../containers/daos/cart/cartFS'\r\n//import cartsMemory from '../containers/daos/cart/cartMemory';\r\n\r\n//CONTROLLER MONGODB\r\n//Post create new cart\r\nconst createNewCart = async (_req, res, next) => {\r\n    try {\r\n        const idCart = await _containers_daos_cart_cartMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addCart();\r\n        res.status(200).json({ id: idCart });\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n};\r\n//Delete cart\r\nconst deleteCart = async (req, res, next) => {\r\n    const id = req.params.id;\r\n    try {\r\n        const mess = await _containers_daos_cart_cartMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteOneCart(id);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//Get all products from cart\r\nconst getAllProductsCart = async (req, res, next) => {\r\n    const id = req.params.id;\r\n    try {\r\n        const productsFromCart = await _containers_daos_cart_cartMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listAllProductsFromCart(id);\r\n        res.status(200).json(productsFromCart);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//POST add products to the cart\r\nconst addProductCart = async (req, res, next) => {\r\n    const idCart = req.params.id;\r\n    const idProduct = req.params.idProduct;\r\n    try {\r\n        const mess = await _containers_daos_cart_cartMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addOneProductToCart(idCart, idProduct);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//DELETE a product by id cart and id product\r\nconst deleteProduct = async (req, res, next) => {\r\n    const idCart = req.params.id;\r\n    const idProduct = req.params.idProduct;\r\n    try {\r\n        const mess = await _containers_daos_cart_cartMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteOneProductFromCart(idCart, idProduct);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//CONTROLLERS FYLE SYSTEM\r\n// //Post create new cart\r\n// export const createNewCart = async (_req: Request, res: Response, next: NextFunction) => {\r\n//     try {\r\n//         const products: any = {\r\n//             products: []\r\n//         };\r\n//         const idCart = await cartsFS.newCart(products);\r\n//         res.status(200).json({ id: idCart });\r\n//     } catch(err) {\r\n//         next(err);\r\n//     }\r\n// };\r\n// //Delete cart\r\n// export const deleteCart = async (req: Request, res: Response, next: NextFunction) => {\r\n//     const id = Number(req.params.id);\r\n//     try {\r\n//         const mess = await cartsFS.deleteCart(id);\r\n//         res.status(200).send(mess);\r\n//     } catch(err) {\r\n//         next(err);\r\n//     };\r\n// };\r\n// //Get all products from cart\r\n// export const getAllProductsCart = (req: Request, res: Response, next: NextFunction) => {\r\n//     const id = Number(req.params.id);\r\n//     try {\r\n//         const productsFromCart = cartsFS.getProducts(id);\r\n//         res.status(200).json(productsFromCart);\r\n//     } catch(err) {\r\n//         next(err);\r\n//     };\r\n// };\r\n// //POST add products to the cart\r\n// export const addProduct = async (req: Request, res: Response, next: NextFunction) => {\r\n//     const id: number = Number(req.params.id);\r\n//     const idProduct: number = Number(req.params.idProduct);\r\n//     try {\r\n//         const mess = await cartsFS.addProductToCart(id, idProduct);\r\n//         res.status(200).send(mess);\r\n//     } catch(err) {\r\n//         next(err);\r\n//     };\r\n// };\r\n// //DELETE a product by id cart and id product\r\n// export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {\r\n//     const id: number = Number(req.params.id);\r\n//     const idProduct: number = Number(req.params.idProduct);\r\n//     try {\r\n//         const mess = await cartsFS.deleteProductFromCart(id, idProduct);\r\n//         res.status(200).send(mess);\r\n//     } catch(err) {\r\n//         next(err);\r\n//     };\r\n// };\r\n/*\r\n//MEMORY\r\nexport const createNewCart = async (_req: Request, res: Response, next: NextFunction) => {\r\n    try {\r\n        const products: any = {\r\n            products: []\r\n        };\r\n        const idCart = cartsMemory.newCart(products);\r\n        res.status(200).json({ id: idCart });\r\n    } catch(err) {\r\n        next(err);\r\n    }\r\n};\r\n\r\n//Delete cart\r\nexport const deleteCart = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const mess = cartsMemory.deleteCart(id);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Get all products from cart\r\nexport const getAllProductsCart = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n\r\n    try {\r\n        const productsFromCart = cartsMemory.getProducts(id);\r\n        res.status(200).json(productsFromCart);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//POST add products to the cart\r\nexport const addProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id: number = Number(req.params.id);\r\n    const idProduct: number = Number(req.params.idProduct);\r\n\r\n    try {\r\n        const mess = cartsMemory.addProductToCart(id, idProduct);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//DELETE a product by id cart and id product\r\nexport const deleteProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id: number = Number(req.params.id);\r\n    const idProduct: number = Number(req.params.idProduct);\r\n    \r\n    try {\r\n        const mess = cartsMemory.deleteProductFromCart(id, idProduct);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n*/ \r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/controllers/cart-controllers.ts?");

/***/ }),

/***/ "./src/controllers/products-controllers.ts":
/*!*************************************************!*\
  !*** ./src/controllers/products-controllers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProduct\": () => (/* binding */ addNewProduct),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"getAllProducts\": () => (/* binding */ getAllProducts),\n/* harmony export */   \"getOneProduct\": () => (/* binding */ getOneProduct),\n/* harmony export */   \"updateProduct\": () => (/* binding */ updateProduct)\n/* harmony export */ });\n/* harmony import */ var _containers_daos_products_productMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/daos/products/productMongo */ \"./src/containers/daos/products/productMongo.ts\");\n//import productsFS from '../containers/daos/products/productsFS'\r\n//import productsMemory from \"../containers/daos/products/productsMeMory\";\r\n\r\n//CONTROLLERS MONGO\r\n//Get all products\r\nconst getAllProducts = async (_req, res, next) => {\r\n    try {\r\n        const allProducts = await _containers_daos_products_productMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listAllProducts();\r\n        res.status(200).json(allProducts);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//Get one poduct by its id\r\nconst getOneProduct = async (req, res, next) => {\r\n    const id = req.params.id;\r\n    try {\r\n        const product = await _containers_daos_products_productMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listOneProduct(id);\r\n        res.status(200).json(product);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n// Post Add new product\r\nconst addNewProduct = async (req, res, next) => {\r\n    try {\r\n        const idProduct = await _containers_daos_products_productMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProduct(req.body);\r\n        res.status(201).json({ id: idProduct });\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//Put Update product bu its id\r\nconst updateProduct = async (req, res, next) => {\r\n    const id = req.params.id;\r\n    try {\r\n        const mess = await _containers_daos_products_productMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOneProduct(id, req.body);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//DELETE a product base on its ID\r\nconst deleteProduct = async (req, res, next) => {\r\n    const id = req.params.id;\r\n    try {\r\n        const mess = await _containers_daos_products_productMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteOneProduct(id);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n/*\r\n//FYLESYSTEM\r\n//Get all products\r\nexport const getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {\r\n    try {\r\n        const allProducts = await productsFS.getAllData();\r\n        res.status(200).json(allProducts);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Get one poduct by its id\r\nexport const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const product = productsFS.getOneProduct(id);\r\n        res.status(200).json(product);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Post Add new product\r\nexport const addNewProduct = async (req: Request, res: Response, next: NextFunction) => {\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n\r\n    const dataProduct = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n\r\n    try {\r\n        const id = await productsFS.addProduct(dataProduct);\r\n        res.status(200).json({ id })\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Put Update product bu its id\r\nexport const updateProduct = async (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n\r\n    const dataUpdated: any = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n\r\n    try{\r\n        const mess = await productsFS.updateProduct(id, dataUpdated);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err)\r\n    };\r\n};\r\n\r\n//DELETE a product base on its ID\r\nexport const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const mess = await productsFS.deleteProduct(id);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n*/\r\n/*\r\n//MEMORY\r\n//Get all products\r\nexport const getAllProducts = (_req: Request, res: Response, next: NextFunction) => {\r\n    try {\r\n        const allProducts = productsMemory.getAllData();\r\n        res.status(200).json(allProducts);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Get one poduct by its id\r\nexport const getOneProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const product = productsMemory.getOneProduct(id);\r\n        res.status(200).json(product);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Post Add new product\r\nexport const addNewProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n\r\n    const dataProduct = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n\r\n    try {\r\n        const id = productsMemory.addProduct(dataProduct);\r\n        res.status(200).json({ id })\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Put Update product bu its id\r\nexport const updateProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n\r\n    const dataUpdated: any = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n\r\n    try{\r\n        const mess = productsMemory.updateProduct(id, dataUpdated);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err)\r\n    };\r\n};\r\n\r\n//DELETE a product base on its ID\r\nexport const deleteProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const mess = productsMemory.deleteProduct(id);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n*/ \r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/controllers/products-controllers.ts?");

/***/ }),

/***/ "./src/models/cart-model.ts":
/*!**********************************!*\
  !*** ./src/models/cart-model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typegoose/typegoose */ \"@typegoose/typegoose\");\n/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-model */ \"./src/models/product-model.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\nlet Cart = class Cart {\r\n    _id;\r\n    products;\r\n};\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ auto: true }),\r\n    __metadata(\"design:type\", (mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId))\r\n], Cart.prototype, \"_id\", void 0);\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ ref: () => _product_model__WEBPACK_IMPORTED_MODULE_2__.Product, default: [] }),\r\n    __metadata(\"design:type\", Array)\r\n], Cart.prototype, \"products\", void 0);\r\nCart = __decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.modelOptions)({\r\n        schemaOptions: {\r\n            timestamps: true\r\n        }\r\n    })\r\n], Cart);\r\n;\r\nconst CartModel = (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.getModelForClass)(Cart);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartModel);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/models/cart-model.ts?");

/***/ }),

/***/ "./src/models/product-model.ts":
/*!*************************************!*\
  !*** ./src/models/product-model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typegoose/typegoose */ \"@typegoose/typegoose\");\n/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\nlet Product = class Product {\r\n    _id;\r\n    nombre;\r\n    description;\r\n    codigo;\r\n    url;\r\n    precio;\r\n    stock;\r\n};\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ auto: true }),\r\n    __metadata(\"design:type\", (mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId))\r\n], Product.prototype, \"_id\", void 0);\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ required: true, trim: true }),\r\n    __metadata(\"design:type\", String)\r\n], Product.prototype, \"nombre\", void 0);\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ required: true, trim: true }),\r\n    __metadata(\"design:type\", String)\r\n], Product.prototype, \"description\", void 0);\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ required: true, trim: true }),\r\n    __metadata(\"design:type\", String)\r\n], Product.prototype, \"codigo\", void 0);\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ required: true, trim: true }),\r\n    __metadata(\"design:type\", String)\r\n], Product.prototype, \"url\", void 0);\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ type: Number, required: true, min: 0 }),\r\n    __metadata(\"design:type\", Number)\r\n], Product.prototype, \"precio\", void 0);\r\n__decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.prop)({ type: Number, required: true, min: 0 }),\r\n    __metadata(\"design:type\", Number)\r\n], Product.prototype, \"stock\", void 0);\r\nProduct = __decorate([\r\n    (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.modelOptions)({\r\n        schemaOptions: {\r\n            timestamps: true\r\n        }\r\n    })\r\n], Product);\r\n\r\n;\r\nconst ProductModel = (0,_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__.getModelForClass)(Product);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductModel);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/models/product-model.ts?");

/***/ }),

/***/ "./src/routes/admin/adminRoutes.ts":
/*!*****************************************!*\
  !*** ./src/routes/admin/adminRoutes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/products-controllers */ \"./src/controllers/products-controllers.ts\");\n//CALL MODULES\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\nconst admin = true;\r\n//IMPORTING CONTROLLERS\r\n\r\n//MIDDLEWARES\r\nfunction areYouAdmin(_req, _res, next) {\r\n    if (admin) {\r\n        next();\r\n    }\r\n    else {\r\n        const err = new Error('You are not authorized to access this route');\r\n        err.status = 401;\r\n        next(err);\r\n    }\r\n}\r\n;\r\n//ROUTES\r\n//Post Add new product\r\nrouter.post('/', areYouAdmin, _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__.addNewProduct);\r\n//Put Update product by its id\r\nrouter.put('/:id', areYouAdmin, _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__.updateProduct);\r\n//Delete product by its id\r\nrouter.delete('/:id', areYouAdmin, _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__.deleteProduct);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/routes/admin/adminRoutes.ts?");

/***/ }),

/***/ "./src/routes/cart-routes.ts":
/*!***********************************!*\
  !*** ./src/routes/cart-routes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/cart-controllers */ \"./src/controllers/cart-controllers.ts\");\n//CALL MODULES\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n//IMPORTING CONTROLLERS\r\n\r\n//CONTROLLERS\r\n//Post create cart\r\nrouter.post('/', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.createNewCart);\r\n//Delete cart\r\nrouter.delete('/:id', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.deleteCart);\r\n//Get products from cart\r\nrouter.get('/:id/products', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.getAllProductsCart);\r\n//POST add products to the cart\r\nrouter.post('/:id/products/:idProduct', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.addProductCart);\r\n//DELETE a product by id cart and id product\r\nrouter.delete('/:id/products/:idProduct', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.deleteProduct);\r\n//EXPORTING ROUTERS\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/routes/cart-routes.ts?");

/***/ }),

/***/ "./src/routes/products-routes.ts":
/*!***************************************!*\
  !*** ./src/routes/products-routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/products-controllers */ \"./src/controllers/products-controllers.ts\");\n/* harmony import */ var _admin_adminRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/adminRoutes */ \"./src/routes/admin/adminRoutes.ts\");\n//CALL MODULES\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n// //IMPORTING CONTROLLERS\r\n\r\n\r\n//ROUTES\r\n//Get all products\r\nrouter.get('/', _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__.getAllProducts);\r\n//Get one product by its id\r\nrouter.get('/:id', _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__.getOneProduct);\r\n//ADMIN ROUTES\r\nrouter.use('/', _admin_adminRoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n//EXPORTING ROUTES\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/routes/products-routes.ts?");

/***/ }),

/***/ "@typegoose/typegoose":
/*!***************************************!*\
  !*** external "@typegoose/typegoose" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;