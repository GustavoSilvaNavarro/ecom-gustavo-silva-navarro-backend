import ContainerFirebase from '../../containerFirebase';

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

class ProductsFireBase extends ContainerFirebase {
    //INSERT DATA
    async addProduct(dataProduct: SingleProduct) {
        try {
            return await this.saveData(dataProduct, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        };
    };

    //GET ALL PRODUCTS
    async listAllProducts() {
        try {
            return await this.readAllData();
        } catch(err) {
            throw err;
        };
    };

    async listOneProduct(id: string) {
        try {
            return await this.listOneData(id, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        }
    };

    async updateOneProduct(id: string, product: SingleProduct) {
        try {
            return await this.updateData(id, product, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        };
    };

    async deleteOneProduct(id: string) {
        try {
            return await this.deleteData(id, process.env.DATABASE_NAME_PRODUCT);
        } catch(err) {
            throw err;
        };
    }
};

export default new ProductsFireBase();