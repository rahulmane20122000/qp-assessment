import { Router } from "express";
import ordersService from "./orders.service";
import { ResponseHandler } from "../../utility/response-handler";

export const ordersRouter = Router();

ordersRouter.post("/add-to-cart", async (req, res, next) => {
    try {
        const {
            user: { email },
        } = res.locals;
        const response = await ordersService.addToCart(email,req.body);
        res.status(response.statusCode).send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});



ordersRouter.post("/place-order", async (req, res, next) => {
    try {
        const {
            user: { email },
        } = res.locals;
        const response = await ordersService.placeOrder(email,req.body);
        res.status(response.statusCode).send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});
