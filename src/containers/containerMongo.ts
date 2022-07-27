import Product from '../models/product-model';
import Cart from '../models/cart-model'

class ContainerMongo {
    async saveData(data: any, ruta: any) {
        try {
            if(ruta === 'Product') {
                const newProduct = new Product(data);
                await newProduct.save();
                return newProduct._id;
            } else {
                const newCart = new Cart();
                await newCart.save();
                return newCart._id;
            };
        } catch(err) {
            throw err;
        };
    };

    //READ DATA
    async readAllData() {
        try {
            const allData = await Product.find({});
            if(allData.length > 0) {
                return allData;
            } else {
                const err: any = new Error('Collection is empty!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };

    //Get data by its id
    async listOneData(id: string, ruta: any) {
        try {
            let data;
            if(ruta === 'Product') {
                data = await Product.findById(id);
            } else {
                data = await Cart.findById(id);
            };

            if(data !== null) {
                return data;
            } else {
                const err: any = new Error(`${ruta} does not exist!`);
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        }
    };

    //UPDATE DATA
    async updateData(id: string, dataToUpdate: any, ruta: any) {
        try {
            let updatedData;
            if(ruta === 'Product') {
                updatedData = await Product.findByIdAndUpdate(id, dataToUpdate);
            } else {
                updatedData = await Cart.findByIdAndUpdate(id, dataToUpdate);
            };

            if(updatedData !== null) {
                return `${ruta} updated!`;
            } else {
                const err: any = new Error(`${ruta} does not exist. It can not be modified!`);
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };

    //Delete data
    async deleteData(id: string, ruta: any) {
        try {
            let deletedData;
            if(ruta === 'Product') {
                deletedData = await Product.findByIdAndDelete(id);
            } else {
                deletedData = await Cart.findByIdAndDelete(id);
            };

            if(deletedData !== null) {
                return `${ruta} deleted!`;
            } else {
                const err: any = new Error(`${ruta} does not exist. It can not be deleted!`);
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };
};

export default ContainerMongo;