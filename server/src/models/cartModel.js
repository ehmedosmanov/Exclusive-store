import mongoose from "mongoose";

const {Schema} = mongoose


const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
  totalAmount: { type: Number, default: 0 },
},{ timestamps: true })


export const Cart = mongoose.model("Cart", cartSchema)