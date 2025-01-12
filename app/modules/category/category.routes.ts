import {Router} from 'express';
import categoryService from './category.service';
import { ResponseHandler } from '../../utility/response-handler';


export const categoryRouter = Router();


categoryRouter.post("/create",async(req,res,next)=>{
    try {
        const response = await categoryService.createCategory(req.body,res.locals.user);
        res.status(response.statusCode).send(new ResponseHandler(response));
    } catch (error) {
        next(error)
    }
})