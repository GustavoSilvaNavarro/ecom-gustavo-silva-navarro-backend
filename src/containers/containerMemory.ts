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

type SingleCart = {
    id: number,
    timestamp: number,
    products: SingleProduct[]
};

class ContainerMemory {
    _productsArr: SingleProduct[];
    _cartsArr: SingleCart[];

    constructor() {
        this._productsArr = [];
        this._cartsArr = [];
    };

    saveData(data: SingleProduct[], ruta: any) {
        try {
            let arrayDatos: any;
            if(ruta === 'Product') {
                arrayDatos = this._productsArr;
            } else {
                arrayDatos = this._cartsArr;
            };

            let objectId = 0;
        
            if(arrayDatos.length === 0) {
                objectId = 1;
            } else {
                let idArr: any = [];
                arrayDatos.forEach(product => {
                    idArr.push(product.id);
                });
        
                const maxId = Math.max(...idArr);
                objectId = maxId + 1;
            };
        
            let newProduct: any = {
                id: objectId,
                timestamp: Date.now(),
                ...data,
            };

            if(ruta === 'Product') {
                this._productsArr.push(newProduct);
            } else {
                this._cartsArr.push(newProduct);
            };

            return objectId;
        } catch(err) {
            throw err;
        };
    };

    //READ DATA
    readData(ruta: any) {
        try {
            let arrayDatos: any;
            if(ruta === 'Product') {
                arrayDatos = this._productsArr;
            } else {
                arrayDatos = this._cartsArr;
            };

            return arrayDatos;
        } catch(err) {
            throw err;
        };
    };

    //Get data by its id
    listOne(id: number, ruta: any) {
        try {
            let arrayDatos: any;
            if(ruta === 'Product') {
                arrayDatos = this._productsArr;
            } else {
                arrayDatos = this._cartsArr;
            };

            return arrayDatos.find(item => item.id === id);
        } catch(err) {
            throw err;
        }
    };

    //UPDATE DATA
    updateData(id: number, dataToUpdate: any) {
        try {
            if(this._productsArr.length > 0) {
                if(!isNaN(id)) {
                    const product = this._productsArr.find(data => data.id == id);
                    const newArray = this._productsArr.filter(data => data.id !== id);
                    if(product) {
                        let productToUpdate = {
                            id,
                            timestamp: product.timestamp,
                            ...dataToUpdate
                        };
            
                        this._productsArr = [...newArray, productToUpdate];
        
                        return 'Producto actualizado!';
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
                const err: any = new Error('Please register a product to update!');
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        }
    };

    //Delete data
    deleteData(id: number, ruta: any) {
        try {
            let arrayDatos: any;
            if(ruta === 'Product') {
                arrayDatos = this._productsArr;
            } else {
                arrayDatos = this._cartsArr;
            };

            if(arrayDatos.length > 0) {
                if(!isNaN(id)) {
                    //producto a eliminar
                    const deleteProduct = arrayDatos.find(item => item.id === id);
                    if(deleteProduct) {
                        const newAllProducts = arrayDatos.filter(data => data.id !== id);

                        if(ruta === 'Product') {
                            this._productsArr = newAllProducts;
                        } else {
                            this._cartsArr = newAllProducts;
                        };

                        return `${ruta} eliminado!`;
                    } else {
                        const err: any = new Error(`${ruta} does not exist!`);
                        err.status = 400;
                        throw err;
                    };
                } else {
                    const err: any = new Error('ID must be a number!');
                    err.status = 400;
                    throw err;
                };
            } else {
                const err: any = new Error(`Please register a ${ruta} to update!`);
                err.status = 400;
                throw err;
            };
        } catch(err) {
            throw err;
        };
    };
};

export default ContainerMemory;