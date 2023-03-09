import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from "../models/user";

export async function CreateUser(req: Request, res: Response) {
    
  const { name, email, password } = req.body;

  const CreateUser = new UserModel({
    name: name,
    email: email,
    password: password,
    uuid: uuidv4()
  });

  const UserExist = await UserModel.findOne({ email: email });

  if(name == ''){
    res.status(401).json({msg: "Preencha o Campo Do Nome"})
    return;
  }
  if (password < 6) {
    res.status(401).json({ msg: "Sua Senha Deve Conter No Minímo 6 digitos" });
    return;  
  }
  if (UserExist) {
    res.status(401).json({ msg: "usuário já existe" });
    return;
  }

  const addUser = await UserModel.create(CreateUser);

 res.status(201).json({ msg: "User created", User: CreateUser})
 return;
}
