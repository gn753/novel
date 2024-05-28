import { Schema } from "mongoose";

const mongoosePlugin = (schema: Schema) => {
  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  });
};

export default mongoosePlugin;
