import { Request, Response } from "express";
import { UserModel } from "../models/User";

export async function GetUser(req: Request, res: Response){

    const { uuid } = req.body

    const user = await UserModel.findOne({ uuid: uuid })

    return res.status(200).json({ user })

}