import mongoose from 'mongoose';

//SETTING CONNECTION
export async function connectDB() {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1/ecommerce-gsn-coderHouse');
        console.log(`DB is connected to ${db.connection.db.databaseName}`);    
    } catch(err) {
        console.log(err);
    };
};