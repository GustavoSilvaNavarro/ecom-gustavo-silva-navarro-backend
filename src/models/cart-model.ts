import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { Product } from './product-model';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
class Cart {
    @prop({ auto: true })
    _id!: mongoose.Types.ObjectId

    @prop({ ref: () => Product, default: []})
    products?: Ref<Product>[]
};

const CartModel = getModelForClass(Cart);

export default CartModel;