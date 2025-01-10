import { Router } from "express";
import {registerUser} from './user.service'

export const userRouter = Router();



userRouter.post("/register",async(req,res,next)=>{
    try {
       await registerUser(req.body) 
    } catch (error) {
        console.log(error);
        next(error)
    }
})
