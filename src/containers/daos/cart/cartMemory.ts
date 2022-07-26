import ContainerMemory from '../../containerMemory';

//TYPESCRIPT TYPES
type SingleProduct = {
    id: number,
    nombre: string,
    timestamp: number,
    description: string,
    codigo: string,
    url: string,
    precio: number,
    stock: number
};

class CartArchivo extends ContainerMemory {
    constructor() {
        super();
    };

    //Create New Cart
    newCart(cartProducts: SingleProduct[]) {
        try {
            console.log(this._productsArr);
            return this.saveData(cartProducts, process.env.DATABASE_NAME_CART);
        } catch(err) {
            throw err;
        }
    };

    //Delete Cart
    deleteCart(id: number) {
        try {
            return this.deleteData(id, process.env.DATABASE_NAME_CART);
        } catch(err) {
            throw err;
        };
    };

    //Get All products from a Cart
    getProducts(id: number) {
        try {
            if(this._cartsArr.length > 0) {
                if(!isNaN(id)) {
                    const selectedCart = this.listOne(id, process.env.DATABASE_NAME_CART)
                    if(selectedCart) {
                        return selectedCart.products;
                    } else {
                        const err: any = new Error('Cart does not exist!');
                        err.status = 400;
                        throw err;
                    };
                } else {
                    const err: any = new Error('ID must be a number!');
                    err.status = 400;
                    throw err;
                };
            } else {
                const err: any = new Error('Must to register a cart to be able to see products!');
                err.status = 400;
                throw err;
            };    
        } catch(err) {
            throw err;
        };
    };

    //Add a product to the cart
    addProductToCart(idCart: number, idProduct: number) {
        try {
            if(this._cartsArr.length > 0) {
                if(this._productsArr.length > 0) {
                    if(!isNaN(idCart) && !isNaN(idProduct)) {
                        const productSelected = this.listOne(idProduct, process.env.DATABASE_NAME_PRODUCT)
                        const cartSelected = this.listOne(idCart, process.env.DATABASE_NAME_CART)
                        
                        if(cartSelected) {
                            if(productSelected) {
                                cartSelected.products.push(productSelected);
                                const otherCarts = this._cartsArr.filter(item => item.id !== idCart);
                                this._cartsArr = [...otherCarts, cartSelected];

                                return 'Producto anadido';
                            } else {
                                const err: any = new Error('Product does not exist!');
                                err.status = 400;
                                throw err;
                            };
                        } else {
                            const err: any = new Error('Cart does not exist!');
                            err.status = 400;
                            throw err;
                        };
                    } else {
                        const err: any = new Error('Both IDs must be a number!');
                        err.status = 400;
                        throw err;
                    };
                } else {
                    const err: any = new Error('Register products to be able to add them to the cart!');
                    err.status = 400;
                    throw err;
                };
            } else {
                const err: any = new Error('Register a cart to be able to add products to it!');
                err.status = 400;
                throw err;
            };        
        } catch(err) {
            throw err;
        };
    };

    //Delete one product from an specific cart
    deleteProductFromCart(idCart: number, idProduct: number) {
        try {
            if(this._cartsArr.length > 0) {
                if(this._productsArr.length > 0) {
                    if(!isNaN(idCart) && !isNaN(idProduct)) {
                        const otherElementsArr = this._cartsArr.filter(cart => cart.id !== idCart);
                        const cartSelected = this.listOne(idCart, process.env.DATABASE_NAME_CART);
                        if(cartSelected) {
                            const deleteProduct = cartSelected.products.find(item => item.id == idProduct);
                            if(deleteProduct) {
                                const otherProducts = cartSelected.products.filter(product => product.id !== idProduct);
                                
                                cartSelected.products = otherProducts;
                                this._cartsArr = [...otherElementsArr, cartSelected];
                                
                                return 'Producto Eliminado';
                            } else {
                                const err: any = new Error('Product does not exist!');
                                err.status = 400;
                                throw err;
                            };
                        } else {
                            const err: any = new Error('Cart does not exist!');
                            err.status = 400;
                            throw err;
                        };
                    } else {
                        const err: any = new Error('Both IDs must be a number!');
                        err.status = 400;
                        throw err;
                    };
                } else {
                    const err: any = new Error('Register products to be able to delete them from the cart!');
                    err.status = 400;
                    throw err;
                };
            } else {
                const err: any = new Error('Register a cart to be able to delete products from it!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };
};

export default new CartArchivo();