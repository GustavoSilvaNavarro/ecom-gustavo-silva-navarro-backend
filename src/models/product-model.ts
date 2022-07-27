import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Product {
    @prop({ auto: true })
    _id!: mongoose.Types.ObjectId

    @prop({ required: true, trim: true })
    nombre!: string

    @prop({ required: true, trim: true })
    description!: string

    @prop({ required: true, trim: true })
    codigo!: string

    @prop({ required: true, trim: true })
    url!: string

    @prop({ type: Number, required: true, min: 0 })
    precio!: number

    @prop({ type: Number, required: true, min: 0 })
    stock!: number
};

const ProductModel = getModelForClass(Product);

export default ProductModel;