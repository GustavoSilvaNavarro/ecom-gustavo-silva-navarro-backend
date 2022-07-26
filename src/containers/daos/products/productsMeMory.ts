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

class ProductsMemory extends ContainerMemory {
    constructor() {
        super();
    };

    //GET ALL PRODUCTS FROM DB
    getAllData() {
        try {
            if(this._productsArr.length > 0) {
                return this.readData(process.env.DATABASE_NAME_PRODUCT);
            } else {
                const err: any = new Error('Product list empty!');
                err.status = 400;
                throw err;
            };        
        } catch(err) {
            throw err;
        };
    };

    //GET ONE PRODUCT BY ITS ID
    getOneProduct(id: number) {
        try {
            if(this._productsArr.length > 0) {
                if(!isNaN(id)) {
                    const product = this.listOne(id, process.env.DATABASE_NAME_PRODUCT);
                    if(product) {
                        return product;
                    } else {
                        const err: any = new Error('Product does not exist!');
                        err.status = 400;
                        throw err;
                    };
                } else {
                    const err: any = new Error('ID must be a number!');
                    err.status = 400;
                    throw err;
                };
            } else {
                const err: any = new Error('Please register a product!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };

    //INSERT DATA
    addProduct(dataProduct: any) {
        try {
            return this.saveData(dataProduct, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        };
    };

    //UPDATE DATA PRODUCT
    updateProduct(id: number, updateProduct: SingleProduct) {
        try {
            return this.updateData(id, updateProduct);
        } catch(err) {
            throw err;
        };
    };

    //Delete product
    deleteProduct(id: number) {
        try {
            return this.deleteData(id, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        };
    };
};

export default new ProductsMemory();