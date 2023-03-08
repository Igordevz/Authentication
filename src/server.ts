import express from "express";
import { ConectionMongoose } from "./database/dbconection";
import { router } from "./router/router";
import cors from 'cors'
import * as dotenv from 'dotenv' 

dotenv.config()
export async function BootStrap() {
  const app = express();
  app.use(cors())
  await ConectionMongoose();

  const door = 3000;
  app.listen(door, () => {
    console.log(door);
  });
  app.use(express.json());

  app.use(router);

}

BootStrap();
