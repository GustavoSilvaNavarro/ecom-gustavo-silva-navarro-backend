import ContainerFirebase from "../../containerFirebase";
import { Timestamp } from 'firebase/firestore';

class CartFirebase extends ContainerFirebase {
    //INSERT DATA
    async addCart() {
        try {
            const data = {
                timestamp: Timestamp.now().toDate().toString(),
                products: []
            };
            return await this.saveData(data, process.env.DATABASE_NAME_CART);
        } catch(err) {
            throw err;
        };
    };

    async deleteOneCart(id: string) {
        try {
            return await this.deleteData(id, process.env.DATABASE_NAME_CART);
        } catch(err) {
            throw err;
        };
    };

    async addOneProductToCart(idCart: string, idProduct: string) {
        try {
            const selectedCart = await this.listOneData(idCart, process.env.DATABASE_NAME_CART);
            const productToAdd = await this.listOneData(idProduct, process.env.DATABASE_NAME_PRODUCT);
            if(selectedCart) {
                if(productToAdd) {
                    const productsAddtion = [...selectedCart.products, productToAdd];
                    return await this.updateData(idCart, { products: productsAddtion }, process.env.DATABASE_NAME_CART)

                } else {
                    const err: any = new Error('Product does not exist. It can not be modified!');
                    err.status = 400;
                    throw err;
                };
            } else {
                const err: any = new Error('Cart does not exist. It can not be modified!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };

    //GET ALL PRODUCTS FROM SELECTED CART
    async listAllProductsFromCart(idCart: string) {
        try {
            const carritoSeleccionado = await this.listOneData(idCart, process.env.DATABASE_NAME_CART);

            if(carritoSeleccionado) {
                if(carritoSeleccionado.products.length > 0) {
                    return carritoSeleccionado.products;
                } else {
                    const err: any = new Error('Cart is empty!');
                    err.status = 400;
                    throw err;
                };
            } else {
                const err: any = new Error('Cart does not exist!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };

    //Delete product from a selected Cart
    async deleteOneProductFromCart(idCart: string, idProduct: string) {
        try {
            const selectedCart = await this.listOneData(idCart, process.env.DATABASE_NAME_CART);
            const productToDelete = await this.listOneData(idProduct, process.env.DATABASE_NAME_PRODUCT);

            if(selectedCart) {
                if(productToDelete) {
                    if(selectedCart.products.length > 0) {
                        const otherProducts = selectedCart.products.filter(item => item.id !== idProduct);
                        await this.updateData(idCart, { products: otherProducts }, process.env.DATABASE_NAME_CART);
                        return 'Producto eliminado de carrito';
                    } else {
                        const err: any = new Error('Cart does not have products to delete!');
                        err.status = 400;
                        throw err;
                    };
                } else {
                    const err: any = new Error('Product does not exist!');
                    err.status = 400;
                    throw err;
                }
            } else {
                const err: any = new Error('Cart does not exist!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        }
    };
};

export default new CartFirebase();