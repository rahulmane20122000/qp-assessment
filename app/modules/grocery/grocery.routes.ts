import { Router } from "express";
import groceryService from "./grocery.service";
import { permit } from "../../utility/authorize";
import { ROLES } from "../../constants/roles.constants";
import { ResponseHandler } from "../../utility/response-handler";
import { SUCCESS_CODES } from "../../constants/codes.constants";
import { IGroceryItems } from "./grocery.types";

export const groceryItemsRouter = Router();

groceryItemsRouter.post(
    "/create",
    permit([ROLES.ADMIN]),
    async (req, res, next) => {
        try {
            const response = await groceryService.createGrocery(
                req.body,
                res.locals.user.email
            );
            res.status(response.statusCode).send(new ResponseHandler(response));
        } catch (error) {
            next(error);
        }
    }
);

groceryItemsRouter.get("/get-all-items", async (req, res, next) => {
    try {
        const response = await groceryService.getAllItems();
        res.status(SUCCESS_CODES.OK).send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

groceryItemsRouter.put("/remove-items", permit([ROLES.ADMIN]),async (req, res, next) => {
    try {
        const response = await groceryService.deleteGroceryItems(req.body.itemId);
        res.status(SUCCESS_CODES.OK).send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

groceryItemsRouter.put("/update-items",permit([ROLES.ADMIN]), async (req, res, next) => {
    try {
        const {itemId,newGroceryDetails} = req.body;
        const response = await groceryService.updateGroceryItems(itemId,newGroceryDetails);
        res.status(SUCCESS_CODES.OK).send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});