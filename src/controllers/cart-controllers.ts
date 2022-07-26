import { Request, Response, NextFunction } from 'express';
import cartsFS from '../containers/daos/cart/cartFS'
//import cartsMemory from '../containers/daos/cart/cartMemory';

//Post create new cart
export const createNewCart = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const products: any = {
            products: []
        };
        const idCart = await cartsFS.newCart(products);
        res.status(200).json({ id: idCart });
    } catch(err) {
        next(err);
    }
};

//Delete cart
export const deleteCart = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const mess = await cartsFS.deleteCart(id);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};

//Get all products from cart
export const getAllProductsCart = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
        const productsFromCart = cartsFS.getProducts(id);
        res.status(200).json(productsFromCart);
    } catch(err) {
        next(err);
    };
};

//POST add products to the cart
export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);
    const idProduct: number = Number(req.params.idProduct);

    try {
        const mess = await cartsFS.addProductToCart(id, idProduct);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};

//DELETE a product by id cart and id product
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);
    const idProduct: number = Number(req.params.idProduct);
    
    try {
        const mess = await cartsFS.deleteProductFromCart(id, idProduct);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};




/*
//MEMORY
export const createNewCart = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const products: any = {
            products: []
        };
        const idCart = cartsMemory.newCart(products);
        res.status(200).json({ id: idCart });
    } catch(err) {
        next(err);
    }
};

//Delete cart
export const deleteCart = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const mess = cartsMemory.deleteCart(id);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};

//Get all products from cart
export const getAllProductsCart = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
        const productsFromCart = cartsMemory.getProducts(id);
        res.status(200).json(productsFromCart);
    } catch(err) {
        next(err);
    };
};

//POST add products to the cart
export const addProduct = (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);
    const idProduct: number = Number(req.params.idProduct);

    try {
        const mess = cartsMemory.addProductToCart(id, idProduct);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};

//DELETE a product by id cart and id product
export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);
    const idProduct: number = Number(req.params.idProduct);
    
    try {
        const mess = cartsMemory.deleteProductFromCart(id, idProduct);
        res.status(200).send(mess);
    } catch(err) {
        next(err);
    };
};
*/