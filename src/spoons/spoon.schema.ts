import { Schema } from 'mongoose';

export const SpoonSchema = new Schema({
  name: String,
  lenght: Number,
  age: Number,
});
