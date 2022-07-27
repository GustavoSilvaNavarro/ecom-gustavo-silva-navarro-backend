//CALL MODULES
import { Request, Response, NextFunction } from "express";

//import productsFS from '../containers/daos/products/productsFS'
//import productsMemory from "../containers/daos/products/productsMeMory";
import ProductMDB from "../containers/daos/products/productMongo";

//CONTROLLERS MONGO
//Get all products
export const getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const allProducts = await ProductMDB.listAllProducts();
        res.status(200).json(allProducts);
    } catch(err) {
        next(err);
    };
};

//Get one poduct by its id
export const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const product = await ProductMDB.listOneProduct(id);
        res.status(200).json(product);
    } catch(err) {
        next(err);
    };
};

// Post Add new product
export const addNewProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idProduct = await ProductMDB.addProduct(req.body);
        res.status(201).json({ id: idProduct });
    } catch(err) {
        next(err);
    };
};

//Put Update product bu its id
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try{
        const mess = await ProductMDB.updateOneProduct(id, req.body);
        res.status(200).send(mess);
    } catch(err) {
        next(err)
    };
};

//DELETE a product base on its ID
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const mess = await ProductMDB.deleteOneProduct(id);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};


/*
//FYLESYSTEM
//Get all products
export const getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const allProducts = await productsFS.getAllData();
        res.status(200).json(allProducts);
    } catch(err) {
        next(err);
    };
};

//Get one poduct by its id
export const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const product = productsFS.getOneProduct(id);
        res.status(200).json(product);
    } catch(err) {
        next(err);
    };
};

//Post Add new product
export const addNewProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { nombre, description, codigo, url, precio, stock } = req.body;

    const dataProduct = {
        nombre,
        description,
        codigo,
        url,
        precio: Number(precio),
        stock: Number(stock)
    };

    try {
        const id = await productsFS.addProduct(dataProduct);
        res.status(200).json({ id })
    } catch(err) {
        next(err);
    };
};

//Put Update product bu its id
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    const { nombre, description, codigo, url, precio, stock } = req.body;

    const dataUpdated: any = {
        nombre,
        description,
        codigo,
        url,
        precio: Number(precio),
        stock: Number(stock)
    };

    try{
        const mess = await productsFS.updateProduct(id, dataUpdated);
        res.status(200).send(mess);
    } catch(err) {
        next(err)
    };
};

//DELETE a product base on its ID
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const mess = await productsFS.deleteProduct(id);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};
*/




/*
//MEMORY
//Get all products
export const getAllProducts = (_req: Request, res: Response, next: NextFunction) => {
    try {
        const allProducts = productsMemory.getAllData();
        res.status(200).json(allProducts);
    } catch(err) {
        next(err);
    };
};

//Get one poduct by its id
export const getOneProduct = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const product = productsMemory.getOneProduct(id);
        res.status(200).json(product);
    } catch(err) {
        next(err);
    };
};

//Post Add new product
export const addNewProduct = (req: Request, res: Response, next: NextFunction) => {
    const { nombre, description, codigo, url, precio, stock } = req.body;

    const dataProduct = {
        nombre,
        description,
        codigo,
        url,
        precio: Number(precio),
        stock: Number(stock)
    };

    try {
        const id = productsMemory.addProduct(dataProduct);
        res.status(200).json({ id })
    } catch(err) {
        next(err);
    };
};

//Put Update product bu its id
export const updateProduct = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    const { nombre, description, codigo, url, precio, stock } = req.body;

    const dataUpdated: any = {
        nombre,
        description,
        codigo,
        url,
        precio: Number(precio),
        stock: Number(stock)
    };

    try{
        const mess = productsMemory.updateProduct(id, dataUpdated);
        res.status(200).send(mess);
    } catch(err) {
        next(err)
    };
};

//DELETE a product base on its ID
export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const mess = productsMemory.deleteProduct(id);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};

*/