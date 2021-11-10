import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
});

export class Product {
  id: String;
  name: String;
  desc: String;
  price: number;
}
