//CALL MODULES
import fs from 'fs';

//DATA
let productsArr = JSON.parse(fs.readFileSync('./src/public/db/products.json', 'utf-8'));

//CONTROLLERS
//Get all products
export const getAllProducts = (req, res, next) => {
    if(productsArr.length > 0) {
        res.status(200).json(productsArr);
    } else {
        const err = new Error('Product list empty!');
        err.status = 400;
        next(err);
    };
};

//Get one poduct by its id
export const getOneProduct = (req, res, next) => {
    const id = Number(req.params.id);

    if(productsArr.length > 0) {
        if(!isNaN(id)) {
            const product = productsArr.find(item => item.id === id);
            if(product) {
                res.status(200).json(product);
            } else {
                const err = new Error('Product does not exist!');
                err.status = 400;
                next(err);
            };
        } else {
            const err = new Error('ID must be a number!');
            err.status = 400;
            next(err);
        };
    } else {
        const err = new Error('Please register a product!');
        err.status = 400;
        next(err);
    };
};

//Post Add new product
export const addNewProduct = (req, res) => {
    let objectId = 0;
    const { nombre, description, codigo, url, precio, stock } = req.body;

    if(productsArr.length === 0) {
        objectId = 1;
    } else {
        let idArr = [];
        productsArr.forEach(product => {
            idArr.push(product.id);
        });

        const maxId = Math.max(...idArr);
        objectId = maxId + 1;
    };

    let newProduct = {
        id: objectId,
        timestamp: Date.now(),
        nombre,
        description,
        codigo,
        url,
        precio: Number(precio),
        stock: Number(stock)
    };

    productsArr.push(newProduct);

    fs.writeFileSync('./src/public/db/products.json', JSON.stringify(productsArr), 'utf-8');
    res.status(200).send('Created');
};

//Put Update product bu its id
export const updateProduct = (req, res, next) => {
    const id = Number(req.params.id);
    if(productsArr.length > 0) {
        if(!isNaN(id)) {
            const product = productsArr.find(data => data.id == id);
            const newArray = productsArr.filter(data => data.id !== id);
            if(product) {
                const { nombre, description, codigo, url, precio, stock } = req.body;
                let productToUpdate = {
                    id,
                    timestamp: product.timestamp,
                    nombre,
                    description,
                    codigo,
                    url,
                    precio: Number(precio),
                    stock: Number(stock)
                };
    
                productsArr = [...newArray, productToUpdate];

                fs.writeFileSync('./src/public/db/products.json', JSON.stringify(productsArr), 'utf-8');

                res.status(200).send('Producto actualizado!');
            } else {
                const err = new Error('Product does not exist!');
                err.status = 400;
                next(err);
            };
        } else {
            const err = new Error('ID must be a number!');
            err.status = 400;
            next(err);
        };
    } else {
        const err = new Error('Please register a product to update!');
        err.status = 400;
        next(err);
    };
};

//DELETE a product base on its ID
export const deleteProduct = (req, res, next) => {
    const id = Number(req.params.id);
    if(productsArr.length > 0) {
        if(!isNaN(id)) {
            //producto a eliminar
            const deleteProduct = productsArr.find(item => item.id === id);
            if(deleteProduct) {
                const newAllProducts = productsArr.filter(data => data.id !== id);
                productsArr = newAllProducts;
                fs.writeFileSync('./src/public/db/products.json', JSON.stringify(productsArr), 'utf-8');
                res.status(200).send('Producto eliminado!');
            } else {
                const err = new Error('Product does not exist!');
                err.status = 400;
                next(err);
            };
        } else {
            const err = new Error('ID must be a number!');
            err.status = 400;
            next(err);
        };
    } else {
        const err = new Error('Please register a product to update!');
        err.status = 400;
        next(err);
    };
};