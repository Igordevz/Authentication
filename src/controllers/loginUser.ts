import { Request, Response } from "express";
import { UserModel } from "../models/User";

export async function LoginUser(req: Request, res: Response){

    const { email, password } = req.body

    const Logar = await UserModel.findOne({ email: email, password: password })


    if(Logar){
        res.status(200).json(Logar)
        return;
    }

    if(!Logar){
        res.status(401).json({ msg: 'Usuário Ou Senhas Não Existe' })
        return;
     }


    return res.status(200).json({ msg: "User Logado", User: Logar});

}