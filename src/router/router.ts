import { Router } from "express";
import { CreateUser } from "../controllers/create_user";
import { LoginUser } from "../controllers/loginUser";
import { GetUser } from "../controllers/user";

export const router = Router();

router.get("/", (req, res) => {
 
  return res.status(200).json({ msg: "api conect" });

});

router.post("/create_user", CreateUser);

router.post('/login_user', LoginUser)

router.post('/user', GetUser )