//CALL MODULES
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//Get absolute path of the text file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//CONTROLLERS
//Main page
export const mainController = async (req, res) => {
    try {
        const dataProducts = await fs.promises.readFile(path.join(__dirname, '../db/db.txt'), 'utf-8');
        const allProducts = JSON.parse(dataProducts);
        res.status(200).json(allProducts);
    } catch(err) {
        res.status(500).send('Error en servidor', err.message);
    };
};

//Random product page
export const randomProductController = async (req, res) => {
    const randomNumber = Math.floor(Math.random() * 3);
    try {
        const allData = await fs.promises.readFile(path.join(__dirname, '../db/db.txt'), 'utf-8');
        const products = JSON.parse(allData);

        res.status(200).json(products[randomNumber]);
    } catch(err) {
        res.status(500).send('Error en servidor', err.message);
    };
};