import ContainerMongo from '../../containerMongo';
import Cart from '../../../models/cart-model';

class CartMongo extends ContainerMongo {
    //INSERT DATA
    async addCart() {
        try {
            return await this.saveData(null, process.env.DATABASE_NAME_CART);
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
            if(selectedCart.products.length > 0 && productToAdd !== null) {
                const productsAddtion = [...selectedCart.products, idProduct];
                return await this.updateData(idCart, { products: productsAddtion }, process.env.DATABASE_NAME_CART)
            } else {
                return await this.updateData(idCart, { products: idProduct }, process.env.DATABASE_NAME_CART)
            };
        } catch(err) {
            throw err;
        };
    };

    //GET ALL PRODUCTS FROM SELECTED CART
    async listAllProductsFromCart(idCart: string) {
        try {
            const cartSeleccionado = await Cart.findById(idCart, { products: 1, _id: 0 }).populate('products', '-createdAt -updatedAt -__v');

            if(cartSeleccionado !== null) {
                if(cartSeleccionado.products.length > 0) {
                    return cartSeleccionado;
                } else {
                    const err: any = new Error('Cart is empty!');
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
        };
    };

    //Delete product from a selected Cart
    async deleteOneProductFromCart(idCart: string, idProduct: string) {
        try {
            const selectedCart = await this.listOneData(idCart, process.env.DATABASE_NAME_CART);
            const productToDelete = await this.listOneData(idProduct, process.env.DATABASE_NAME_PRODUCT);

            if(selectedCart.products.length > 0 && productToDelete !== null) {
                const allProducts = await Cart.findById(idCart, { products: 1, _id: 0 }).populate('products', { _id: 1}).exec();
                const restoProductos = allProducts.products.filter(item => item._id.toString() !== productToDelete.id);
                return await this.updateData(idCart, { products: restoProductos }, process.env.DATABASE_NAME_CART)
            } else {
                const err: any = new Error('Cart does not have products to delete!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        }
    };
};

export default new CartMongo();