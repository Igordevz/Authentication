import { Document, model, Schema } from "mongoose";

export default interface Iuser extends Document {
  name: string;
  email: string;
  password: string;
  uuid: string;
}
export const SchemaUser = new Schema<Iuser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uuid: {
    require: true,
    type: String,
  },
});

export const UserModel = model<Iuser>("user", SchemaUser);
