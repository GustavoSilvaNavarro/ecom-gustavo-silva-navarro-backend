import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

class ContainerFileSystem {
    _route: string;
    _routeCart: string;
    _productsArr: SingleProduct[];
    _cartsArr: SingleCart[];

    constructor(_route: string, _routeCart: string) {
        this._route = _route;
        this._routeCart = _routeCart;
        this._productsArr = JSON.parse(fs.readFileSync(path.join(__dirname, _route), 'utf-8'));
        this._cartsArr = JSON.parse(fs.readFileSync(path.join(__dirname, _routeCart), 'utf-8'));
    };

    async saveData(data: SingleProduct[], ruta: any) {
        try {
            let arrayDatos: any;
            let rutaDatos: string;
            if(ruta === 'Product') {
                rutaDatos = this._route;
                arrayDatos = this._productsArr;
            } else {
                rutaDatos = this._routeCart;
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

            arrayDatos.push(newProduct);
    
            await fs.promises.writeFile(path.join(__dirname, rutaDatos), JSON.stringify(arrayDatos), 'utf-8');

            return objectId;    
        } catch(err) {
            throw err;
        };
    };

    //READ DATA
    async readData(ruta: any) {
        try {
            let rutaDatos: string;
            if(ruta === 'Product') {
                rutaDatos = this._route;
            } else {
                rutaDatos = this._routeCart;
            };

            return JSON.parse(await fs.promises.readFile(path.join(__dirname, rutaDatos), 'utf-8'));
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
    async updateData(id: number, dataToUpdate: any) {
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
        
                        await fs.promises.writeFile(path.join(__dirname, this._route), JSON.stringify(this._productsArr), 'utf-8');
        
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
    async deleteData(id: number, ruta: any) {
        try {
            let arrayDatos: any;
            let rutaDatos: string;
            if(ruta === 'Product') {
                rutaDatos = this._route;
                arrayDatos = this._productsArr;
            } else {
                rutaDatos = this._routeCart;
                arrayDatos = this._cartsArr;
            };

            if(arrayDatos.length > 0) {
                if(!isNaN(id)) {
                    //producto a eliminar
                    const deleteProduct = arrayDatos.find(item => item.id === id);
                    if(deleteProduct) {
                        const newAllProducts = arrayDatos.filter(data => data.id !== id);
                        arrayDatos = newAllProducts;
                        await fs.promises.writeFile(path.join(__dirname, rutaDatos), JSON.stringify(arrayDatos), 'utf-8');
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

export default ContainerFileSystem;