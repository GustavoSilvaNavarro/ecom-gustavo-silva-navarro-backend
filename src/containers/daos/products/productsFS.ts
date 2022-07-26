import ContainerFileSystem from '../../containerFileSystem';

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

class ProductsArchivo extends ContainerFileSystem {
    constructor(_route: string, _routeCart: string) {
        super(_route, _routeCart);
    };

    //GET ALL PRODUCTS FROM DB
    async getAllData() {
        try {
            if(this._productsArr.length > 0) {
                return await this.readData(process.env.DATABASE_NAME_PRODUCT);
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
    async addProduct(dataProduct: any) {
        try {
            return await this.saveData(dataProduct, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        };
    };

    //UPDATE DATA PRODUCT
    async updateProduct(id: number, updateProduct: SingleProduct) {
        try {
            return await this.updateData(id, updateProduct);
        } catch(err) {
            throw err;
        };
    };

    //Delete product
    async deleteProduct(id: number) {
        try {
            return await this.deleteData(id, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        };
    };
};

export default new ProductsArchivo('../public/db/products.json', '../public/db/carts.json');