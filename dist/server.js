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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_products_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/products-routes */ \"./src/routes/products-routes.ts\");\n/* harmony import */ var _routes_cart_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/cart-routes */ \"./src/routes/cart-routes.ts\");\n//CALL MODULES\r\n\r\n\r\n\r\n\r\n\r\n//INITIALIZATIONS\r\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\r\n//SETTINGS\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().dirname((0,url__WEBPACK_IMPORTED_MODULE_4__.fileURLToPath)(\"file:///C:/Users/gsnav/OneDrive/Escritorio/code/coderHouse/backend/ecom-gustavo-silva-navarro-backend/src/app.ts\"));\r\napp.set('port', process.env.PORT || 8080);\r\n// app.set('json spaces', 2);\r\n//STATIC FILES\r\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, 'public')));\r\n//MIDDLEWARES\r\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev'));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({ extended: false }));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\r\n\r\n\r\n//ROUTES\r\napp.use('/api/products', _routes_products_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\napp.use('/api/carts', _routes_cart_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\n//NON EXISTENCE ROUTES\r\napp.use((_req, _res, next) => {\r\n    const err = new Error('Not found!');\r\n    err.status = 404;\r\n    next(err);\r\n});\r\n//ERROR HANDLERS\r\napp.use((err, _req, res, _next) => {\r\n    res.status(err.status || 500).json({ error: { status: err.status || 500, message: err.message } });\r\n});\r\n//SERVER\r\napp.listen(app.get('port'), () => {\r\n    console.log('Server on Port:', app.get('port'));\r\n});\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/app.ts?");

/***/ }),

/***/ "./src/containers/containerFileSystem.ts":
/*!***********************************************!*\
  !*** ./src/containers/containerFileSystem.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1___default().dirname((0,url__WEBPACK_IMPORTED_MODULE_2__.fileURLToPath)(\"file:///C:/Users/gsnav/OneDrive/Escritorio/code/coderHouse/backend/ecom-gustavo-silva-navarro-backend/src/containers/containerFileSystem.ts\"));\r\nclass ContainerFileSystem {\r\n    _route;\r\n    _routeCart;\r\n    _productsArr;\r\n    _cartsArr;\r\n    constructor(_route, _routeCart) {\r\n        this._route = _route;\r\n        this._routeCart = _routeCart;\r\n        this._productsArr = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, _route), 'utf-8'));\r\n        this._cartsArr = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, _routeCart), 'utf-8'));\r\n    }\r\n    ;\r\n    async saveData(data, ruta) {\r\n        try {\r\n            let arrayDatos;\r\n            let rutaDatos;\r\n            if (ruta === 'Product') {\r\n                rutaDatos = this._route;\r\n                arrayDatos = this._productsArr;\r\n            }\r\n            else {\r\n                rutaDatos = this._routeCart;\r\n                arrayDatos = this._cartsArr;\r\n            }\r\n            ;\r\n            let objectId = 0;\r\n            if (arrayDatos.length === 0) {\r\n                objectId = 1;\r\n            }\r\n            else {\r\n                let idArr = [];\r\n                arrayDatos.forEach(product => {\r\n                    idArr.push(product.id);\r\n                });\r\n                const maxId = Math.max(...idArr);\r\n                objectId = maxId + 1;\r\n            }\r\n            ;\r\n            let newProduct = {\r\n                id: objectId,\r\n                timestamp: Date.now(),\r\n                ...data,\r\n            };\r\n            arrayDatos.push(newProduct);\r\n            await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, rutaDatos), JSON.stringify(arrayDatos), 'utf-8');\r\n            return objectId;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //READ DATA\r\n    async readData(ruta) {\r\n        try {\r\n            let rutaDatos;\r\n            if (ruta === 'Product') {\r\n                rutaDatos = this._route;\r\n            }\r\n            else {\r\n                rutaDatos = this._routeCart;\r\n            }\r\n            ;\r\n            return JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.readFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, rutaDatos), 'utf-8'));\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Get data by its id\r\n    listOne(id, ruta) {\r\n        try {\r\n            let arrayDatos;\r\n            if (ruta === 'Product') {\r\n                arrayDatos = this._productsArr;\r\n            }\r\n            else {\r\n                arrayDatos = this._cartsArr;\r\n            }\r\n            ;\r\n            return arrayDatos.find(item => item.id === id);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n    }\r\n    ;\r\n    //UPDATE DATA\r\n    async updateData(id, dataToUpdate) {\r\n        try {\r\n            if (this._productsArr.length > 0) {\r\n                if (!isNaN(id)) {\r\n                    const product = this._productsArr.find(data => data.id == id);\r\n                    const newArray = this._productsArr.filter(data => data.id !== id);\r\n                    if (product) {\r\n                        let productToUpdate = {\r\n                            id,\r\n                            timestamp: product.timestamp,\r\n                            ...dataToUpdate\r\n                        };\r\n                        this._productsArr = [...newArray, productToUpdate];\r\n                        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, this._route), JSON.stringify(this._productsArr), 'utf-8');\r\n                        return 'Producto actualizado!';\r\n                    }\r\n                    else {\r\n                        const err = new Error('Product does not exist!');\r\n                        err.status = 400;\r\n                        throw err;\r\n                    }\r\n                    ;\r\n                }\r\n                else {\r\n                    const err = new Error('ID must be a number!');\r\n                    err.status = 400;\r\n                    throw err;\r\n                }\r\n                ;\r\n            }\r\n            else {\r\n                const err = new Error('Please register a product to update!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n    }\r\n    ;\r\n    //Delete data\r\n    async deleteData(id, ruta) {\r\n        try {\r\n            let arrayDatos;\r\n            let rutaDatos;\r\n            if (ruta === 'Product') {\r\n                rutaDatos = this._route;\r\n                arrayDatos = this._productsArr;\r\n            }\r\n            else {\r\n                rutaDatos = this._routeCart;\r\n                arrayDatos = this._cartsArr;\r\n            }\r\n            ;\r\n            if (arrayDatos.length > 0) {\r\n                if (!isNaN(id)) {\r\n                    //producto a eliminar\r\n                    const deleteProduct = arrayDatos.find(item => item.id === id);\r\n                    if (deleteProduct) {\r\n                        const newAllProducts = arrayDatos.filter(data => data.id !== id);\r\n                        arrayDatos = newAllProducts;\r\n                        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, rutaDatos), JSON.stringify(arrayDatos), 'utf-8');\r\n                        return `${ruta} eliminado!`;\r\n                    }\r\n                    else {\r\n                        const err = new Error(`${ruta} does not exist!`);\r\n                        err.status = 400;\r\n                        throw err;\r\n                    }\r\n                    ;\r\n                }\r\n                else {\r\n                    const err = new Error('ID must be a number!');\r\n                    err.status = 400;\r\n                    throw err;\r\n                }\r\n                ;\r\n            }\r\n            else {\r\n                const err = new Error(`Please register a ${ruta} to update!`);\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n}\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerFileSystem);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/containers/containerFileSystem.ts?");

/***/ }),

/***/ "./src/containers/daos/cart/cartFS.ts":
/*!********************************************!*\
  !*** ./src/containers/daos/cart/cartFS.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containerFileSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containerFileSystem */ \"./src/containers/containerFileSystem.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_2___default().dirname((0,url__WEBPACK_IMPORTED_MODULE_3__.fileURLToPath)(\"file:///C:/Users/gsnav/OneDrive/Escritorio/code/coderHouse/backend/ecom-gustavo-silva-navarro-backend/src/containers/daos/cart/cartFS.ts\"));\r\nclass CartArchivo extends _containerFileSystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(_route, _routeCart) {\r\n        super(_route, _routeCart);\r\n    }\r\n    ;\r\n    //Create New Cart\r\n    async newCart(cartProducts) {\r\n        try {\r\n            return await this.saveData(cartProducts, process.env.DATABASE_NAME_CART);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n    }\r\n    ;\r\n    //Delete Cart\r\n    async deleteCart(id) {\r\n        try {\r\n            return await this.deleteData(id, process.env.DATABASE_NAME_CART);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Get All products from a Cart\r\n    getProducts(id) {\r\n        try {\r\n            if (this._cartsArr.length > 0) {\r\n                if (!isNaN(id)) {\r\n                    const selectedCart = this.listOne(id, process.env.DATABASE_NAME_CART);\r\n                    if (selectedCart) {\r\n                        return selectedCart.products;\r\n                    }\r\n                    else {\r\n                        const err = new Error('Cart does not exist!');\r\n                        err.status = 400;\r\n                        throw err;\r\n                    }\r\n                    ;\r\n                }\r\n                else {\r\n                    const err = new Error('ID must be a number!');\r\n                    err.status = 400;\r\n                    throw err;\r\n                }\r\n                ;\r\n            }\r\n            else {\r\n                const err = new Error('Must to register a cart to be able to see products!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Add a product to the cart\r\n    async addProductToCart(idCart, idProduct) {\r\n        try {\r\n            if (this._cartsArr.length > 0) {\r\n                if (this._productsArr.length > 0) {\r\n                    if (!isNaN(idCart) && !isNaN(idProduct)) {\r\n                        const productSelected = this.listOne(idProduct, process.env.DATABASE_NAME_PRODUCT);\r\n                        const cartSelected = this.listOne(idCart, process.env.DATABASE_NAME_CART);\r\n                        if (cartSelected) {\r\n                            if (productSelected) {\r\n                                cartSelected.products.push(productSelected);\r\n                                const otherCarts = this._cartsArr.filter(item => item.id !== idCart);\r\n                                this._cartsArr = [...otherCarts, cartSelected];\r\n                                await fs__WEBPACK_IMPORTED_MODULE_1___default().promises.writeFile(path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname, '../../../public/db/carts.json'), JSON.stringify(this._cartsArr), 'utf-8');\r\n                                return 'Producto anadido';\r\n                            }\r\n                            else {\r\n                                const err = new Error('Product does not exist!');\r\n                                err.status = 400;\r\n                                throw err;\r\n                            }\r\n                            ;\r\n                        }\r\n                        else {\r\n                            const err = new Error('Cart does not exist!');\r\n                            err.status = 400;\r\n                            throw err;\r\n                        }\r\n                        ;\r\n                    }\r\n                    else {\r\n                        const err = new Error('Both IDs must be a number!');\r\n                        err.status = 400;\r\n                        throw err;\r\n                    }\r\n                    ;\r\n                }\r\n                else {\r\n                    const err = new Error('Register products to be able to add them to the cart!');\r\n                    err.status = 400;\r\n                    throw err;\r\n                }\r\n                ;\r\n            }\r\n            else {\r\n                const err = new Error('Register a cart to be able to add products to it!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Delete one product from an specific cart\r\n    async deleteProductFromCart(idCart, idProduct) {\r\n        try {\r\n            if (this._cartsArr.length > 0) {\r\n                if (this._productsArr.length > 0) {\r\n                    if (!isNaN(idCart) && !isNaN(idProduct)) {\r\n                        const otherElementsArr = this._cartsArr.filter(cart => cart.id !== idCart);\r\n                        const cartSelected = this.listOne(idCart, process.env.DATABASE_NAME_CART);\r\n                        if (cartSelected) {\r\n                            const deleteProduct = cartSelected.products.find(item => item.id == idProduct);\r\n                            if (deleteProduct) {\r\n                                const otherProducts = cartSelected.products.filter(product => product.id !== idProduct);\r\n                                cartSelected.products = otherProducts;\r\n                                this._cartsArr = [...otherElementsArr, cartSelected];\r\n                                await fs__WEBPACK_IMPORTED_MODULE_1___default().promises.writeFile(path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname, '../../../public/db/carts.json'), JSON.stringify(this._cartsArr), 'utf-8');\r\n                                return 'Producto Eliminado';\r\n                            }\r\n                            else {\r\n                                const err = new Error('Product does not exist!');\r\n                                err.status = 400;\r\n                                throw err;\r\n                            }\r\n                            ;\r\n                        }\r\n                        else {\r\n                            const err = new Error('Cart does not exist!');\r\n                            err.status = 400;\r\n                            throw err;\r\n                        }\r\n                        ;\r\n                    }\r\n                    else {\r\n                        const err = new Error('Both IDs must be a number!');\r\n                        err.status = 400;\r\n                        throw err;\r\n                    }\r\n                    ;\r\n                }\r\n                else {\r\n                    const err = new Error('Register products to be able to delete them from the cart!');\r\n                    err.status = 400;\r\n                    throw err;\r\n                }\r\n                ;\r\n            }\r\n            else {\r\n                const err = new Error('Register a cart to be able to delete products from it!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n}\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CartArchivo('../public/db/products.json', '../public/db/carts.json'));\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/containers/daos/cart/cartFS.ts?");

/***/ }),

/***/ "./src/containers/daos/products/productsFS.ts":
/*!****************************************************!*\
  !*** ./src/containers/daos/products/productsFS.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containerFileSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containerFileSystem */ \"./src/containers/containerFileSystem.ts\");\n\r\nclass ProductsArchivo extends _containerFileSystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(_route, _routeCart) {\r\n        super(_route, _routeCart);\r\n    }\r\n    ;\r\n    //GET ALL PRODUCTS FROM DB\r\n    async getAllData() {\r\n        try {\r\n            if (this._productsArr.length > 0) {\r\n                return await this.readData(process.env.DATABASE_NAME_PRODUCT);\r\n            }\r\n            else {\r\n                const err = new Error('Product list empty!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //GET ONE PRODUCT BY ITS ID\r\n    getOneProduct(id) {\r\n        try {\r\n            if (this._productsArr.length > 0) {\r\n                if (!isNaN(id)) {\r\n                    const product = this.listOne(id, process.env.DATABASE_NAME_PRODUCT);\r\n                    if (product) {\r\n                        return product;\r\n                    }\r\n                    else {\r\n                        const err = new Error('Product does not exist!');\r\n                        err.status = 400;\r\n                        throw err;\r\n                    }\r\n                    ;\r\n                }\r\n                else {\r\n                    const err = new Error('ID must be a number!');\r\n                    err.status = 400;\r\n                    throw err;\r\n                }\r\n                ;\r\n            }\r\n            else {\r\n                const err = new Error('Please register a product!');\r\n                err.status = 400;\r\n                throw err;\r\n            }\r\n            ;\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //INSERT DATA\r\n    async addProduct(dataProduct) {\r\n        try {\r\n            return await this.saveData(dataProduct, process.env.DATABASE_NAME_PRODUCT);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //UPDATE DATA PRODUCT\r\n    async updateProduct(id, updateProduct) {\r\n        try {\r\n            return await this.updateData(id, updateProduct);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    //Delete product\r\n    async deleteProduct(id) {\r\n        try {\r\n            return await this.deleteData(id, process.env.DATABASE_NAME_PRODUCT);\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n}\r\n;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductsArchivo('../public/db/products.json', '../public/db/carts.json'));\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/containers/daos/products/productsFS.ts?");

/***/ }),

/***/ "./src/controllers/cart-controllers.ts":
/*!*********************************************!*\
  !*** ./src/controllers/cart-controllers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": () => (/* binding */ addProduct),\n/* harmony export */   \"createNewCart\": () => (/* binding */ createNewCart),\n/* harmony export */   \"deleteCart\": () => (/* binding */ deleteCart),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"getAllProductsCart\": () => (/* binding */ getAllProductsCart)\n/* harmony export */ });\n/* harmony import */ var _containers_daos_cart_cartFS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/daos/cart/cartFS */ \"./src/containers/daos/cart/cartFS.ts\");\n\r\n//import cartsMemory from '../containers/daos/cart/cartMemory';\r\n//Post create new cart\r\nconst createNewCart = async (_req, res, next) => {\r\n    try {\r\n        const products = {\r\n            products: []\r\n        };\r\n        const idCart = await _containers_daos_cart_cartFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newCart(products);\r\n        res.status(200).json({ id: idCart });\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n};\r\n//Delete cart\r\nconst deleteCart = async (req, res, next) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const mess = await _containers_daos_cart_cartFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteCart(id);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//Get all products from cart\r\nconst getAllProductsCart = (req, res, next) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const productsFromCart = _containers_daos_cart_cartFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProducts(id);\r\n        res.status(200).json(productsFromCart);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//POST add products to the cart\r\nconst addProduct = async (req, res, next) => {\r\n    const id = Number(req.params.id);\r\n    const idProduct = Number(req.params.idProduct);\r\n    try {\r\n        const mess = await _containers_daos_cart_cartFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProductToCart(id, idProduct);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//DELETE a product by id cart and id product\r\nconst deleteProduct = async (req, res, next) => {\r\n    const id = Number(req.params.id);\r\n    const idProduct = Number(req.params.idProduct);\r\n    try {\r\n        const mess = await _containers_daos_cart_cartFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProductFromCart(id, idProduct);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n/*\r\n//MEMORY\r\nexport const createNewCart = async (_req: Request, res: Response, next: NextFunction) => {\r\n    try {\r\n        const products: any = {\r\n            products: []\r\n        };\r\n        const idCart = cartsMemory.newCart(products);\r\n        res.status(200).json({ id: idCart });\r\n    } catch(err) {\r\n        next(err);\r\n    }\r\n};\r\n\r\n//Delete cart\r\nexport const deleteCart = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const mess = cartsMemory.deleteCart(id);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Get all products from cart\r\nexport const getAllProductsCart = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n\r\n    try {\r\n        const productsFromCart = cartsMemory.getProducts(id);\r\n        res.status(200).json(productsFromCart);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//POST add products to the cart\r\nexport const addProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id: number = Number(req.params.id);\r\n    const idProduct: number = Number(req.params.idProduct);\r\n\r\n    try {\r\n        const mess = cartsMemory.addProductToCart(id, idProduct);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//DELETE a product by id cart and id product\r\nexport const deleteProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id: number = Number(req.params.id);\r\n    const idProduct: number = Number(req.params.idProduct);\r\n    \r\n    try {\r\n        const mess = cartsMemory.deleteProductFromCart(id, idProduct);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n*/ \r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/controllers/cart-controllers.ts?");

/***/ }),

/***/ "./src/controllers/products-controllers.ts":
/*!*************************************************!*\
  !*** ./src/controllers/products-controllers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProduct\": () => (/* binding */ addNewProduct),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"getAllProducts\": () => (/* binding */ getAllProducts),\n/* harmony export */   \"getOneProduct\": () => (/* binding */ getOneProduct),\n/* harmony export */   \"updateProduct\": () => (/* binding */ updateProduct)\n/* harmony export */ });\n/* harmony import */ var _containers_daos_products_productsFS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/daos/products/productsFS */ \"./src/containers/daos/products/productsFS.ts\");\n\r\n//import productsMemory from \"../containers/daos/products/productsMeMory\";\r\n//CONTROLLERS\r\n//Get all products\r\nconst getAllProducts = async (_req, res, next) => {\r\n    try {\r\n        const allProducts = await _containers_daos_products_productsFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllData();\r\n        res.status(200).json(allProducts);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//Get one poduct by its id\r\nconst getOneProduct = async (req, res, next) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const product = _containers_daos_products_productsFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getOneProduct(id);\r\n        res.status(200).json(product);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//Post Add new product\r\nconst addNewProduct = async (req, res, next) => {\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n    const dataProduct = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n    try {\r\n        const id = await _containers_daos_products_productsFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProduct(dataProduct);\r\n        res.status(200).json({ id });\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//Put Update product bu its id\r\nconst updateProduct = async (req, res, next) => {\r\n    const id = Number(req.params.id);\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n    const dataUpdated = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n    try {\r\n        const mess = await _containers_daos_products_productsFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateProduct(id, dataUpdated);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n//DELETE a product base on its ID\r\nconst deleteProduct = async (req, res, next) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const mess = await _containers_daos_products_productsFS__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProduct(id);\r\n        res.status(200).send(mess);\r\n    }\r\n    catch (err) {\r\n        next(err);\r\n    }\r\n    ;\r\n};\r\n/*\r\n//MEMORY\r\n//Get all products\r\nexport const getAllProducts = (_req: Request, res: Response, next: NextFunction) => {\r\n    try {\r\n        const allProducts = productsMemory.getAllData();\r\n        res.status(200).json(allProducts);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Get one poduct by its id\r\nexport const getOneProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const product = productsMemory.getOneProduct(id);\r\n        res.status(200).json(product);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Post Add new product\r\nexport const addNewProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n\r\n    const dataProduct = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n\r\n    try {\r\n        const id = productsMemory.addProduct(dataProduct);\r\n        res.status(200).json({ id })\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n//Put Update product bu its id\r\nexport const updateProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n\r\n    const { nombre, description, codigo, url, precio, stock } = req.body;\r\n\r\n    const dataUpdated: any = {\r\n        nombre,\r\n        description,\r\n        codigo,\r\n        url,\r\n        precio: Number(precio),\r\n        stock: Number(stock)\r\n    };\r\n\r\n    try{\r\n        const mess = productsMemory.updateProduct(id, dataUpdated);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err)\r\n    };\r\n};\r\n\r\n//DELETE a product base on its ID\r\nexport const deleteProduct = (req: Request, res: Response, next: NextFunction) => {\r\n    const id = Number(req.params.id);\r\n    try {\r\n        const mess = productsMemory.deleteProduct(id);\r\n        res.status(200).send(mess);\r\n    } catch(err) {\r\n        next(err);\r\n    };\r\n};\r\n\r\n*/ \r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/controllers/products-controllers.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/cart-controllers */ \"./src/controllers/cart-controllers.ts\");\n//CALL MODULES\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n//IMPORTING CONTROLLERS\r\n\r\n//CONTROLLERS\r\n//Post create cart\r\nrouter.post('/', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.createNewCart);\r\n//Delete cart\r\nrouter.delete('/:id', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.deleteCart);\r\n//Get products from cart\r\nrouter.get('/:id/products', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.getAllProductsCart);\r\n//POST add products to the cart\r\nrouter.post('/:id/products/:idProduct', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.addProduct);\r\n//DELETE a product by id cart and id product\r\nrouter.delete('/:id/products/:idProduct', _controllers_cart_controllers__WEBPACK_IMPORTED_MODULE_1__.deleteProduct);\r\n//EXPORTING ROUTERS\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/routes/cart-routes.ts?");

/***/ }),

/***/ "./src/routes/products-routes.ts":
/*!***************************************!*\
  !*** ./src/routes/products-routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/products-controllers */ \"./src/controllers/products-controllers.ts\");\n/* harmony import */ var _admin_adminRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/adminRoutes */ \"./src/routes/admin/adminRoutes.ts\");\n//CALL MODULES\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n//IMPORTING CONTROLLERS\r\n\r\n\r\n//ROUTES\r\n//Get all products\r\nrouter.get('/', _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__.getAllProducts);\r\n//Get one product by its id\r\nrouter.get('/:id', _controllers_products_controllers__WEBPACK_IMPORTED_MODULE_1__.getOneProduct);\r\n//ADMIN ROUTES\r\nrouter.use('/', _admin_adminRoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n//EXPORTING ROUTES\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://ecom-backend-gustavo-silva-navarro/./src/routes/products-routes.ts?");

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

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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