import {Router} from 'express';
import userService from './roles.service'
import { SUCCESS_CODES } from '../../constants/codes.constants';
import { ResponseHandler } from '../../utility/response-handler';
import { SUCCESS_RESPONSES } from '../../constants/response.constants';

export const rolesRouter = Router();


rolesRouter.post("/create",async(req,res,next)=>{
    try {
        await userService.createRole(req.body);
        res.status(SUCCESS_CODES.CREATED).send(new ResponseHandler(SUCCESS_RESPONSES.CREATED))
    } catch (error) {
        console.log(error);
        next(error);
    }
})