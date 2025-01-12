import { Router } from "express";
import userService from "./user.service";
import { SUCCESS_CODES } from "../../constants/codes.constants";
import { ResponseHandler } from "../../utility/response-handler";
import { SUCCESS_RESPONSES } from "../../constants/response.constants";

export const userRouter = Router();

userRouter.post("/register", async (req, res, next) => {
    try {
       const {token} = await userService.registerUser(req.body);
        res.status(SUCCESS_CODES.CREATED).send(
            new ResponseHandler({...SUCCESS_RESPONSES.CREATED,token})
        );
    } catch (error) {
        console.log(error);
        next(error);
    }
});
userRouter.post("/login", async (req, res, next) => {
    try {
       const response= await userService.userLogin(req.body);
       res.status(SUCCESS_CODES.OK).send(new ResponseHandler(response))
    } catch (error) {
        console.log(error);
        next(error);
    }
});
