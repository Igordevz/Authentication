import mongoose from "mongoose";
import * as dotenv from 'dotenv' 

dotenv.config()
export async function ConectionMongoose() {
  try {
    console.log("conectou ao banco");
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      `mongodb+srv://${process.env.ACESS_USER}:${process.env.ACESS_KEY_USER}@master.fkyj6ng.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.log(error);
  }
}
