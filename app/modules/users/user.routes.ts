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
