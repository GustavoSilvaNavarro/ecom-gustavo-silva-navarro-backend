import { Products, Carts } from '../config/dbFirebase';

class ContainerFirebase {
    async saveData(data: any, ruta: any) {
        try {
            if(ruta === 'Product') {
                const newProduct = await Products.add(data);
                return newProduct.id;
            } else {
                const newCart = await Carts.add(data);
                return newCart.id;
            };
        } catch(err) {
            throw err;
        };
    };

    //READ DATA
    async readAllData() {
        try {
            const allData = await Products.get();
            if(allData.empty) {
                const err: any = new Error('Collection is empty!');
                err.status = 400;
                throw err;
            } else {
                const productsArr = [];
                allData.forEach(doc => productsArr.push({ id: doc.id, ...doc.data() }));
                return productsArr;
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
                data = await Products.doc(id).get();
            } else {
                data = await Carts.doc(id).get();
            };

            if(data.exists) {
                return { id: data.id, ...data.data() };
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
                updatedData = await Products.doc(id).update(dataToUpdate);
            } else {
                updatedData = await Carts.doc(id).update(dataToUpdate);
            };

            if(updatedData.exists) {
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
                deletedData = await Products.doc(id).delete();
            } else {
                deletedData = await Carts.doc(id).delete();
            };

            if(deletedData.exists) {
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

export default ContainerFirebase;