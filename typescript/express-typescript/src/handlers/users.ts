import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreaetUserQueryParams } from "../types/query-params";
import { responseInterface } from "../types/response";

export function getUsers(req:Request, res:Response){
    console.log("hi");
    // req.customFiled // We can defind custom file by declare global with namespace Express and interface Request, follwed by custom object type
   return res.send([])
}


export function getUserById(req:Request, res:Response){
    res.send(["2nd","df"])
}

export function createUser(req:Request<{},{}, CreateUserDto, CreaetUserQueryParams>, res:Response<responseInterface>){
    // req.body.email // Suggestion/properties show up from CreateuserDto
    // req.query.loginAfterCreate // Suggestion from Createuser qeury paras,
    return res.send({
        id:1,
        username:"Rishi",
        email:"rishi@gmail.com"
    })
}