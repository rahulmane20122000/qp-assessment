import { SUCCESS_RESPONSES } from "../../constants/response.constants";
import ordersDb from "./orders.db";
import { IOrderDetails } from "./orders.types";

const addToCart = async (userId: number, userOrder: IOrderDetails) => {
    try {
        await ordersDb.createOrder(userId, userOrder);
        return SUCCESS_RESPONSES.CREATED;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const placeOrder = async (userEmail : string,orderId: number) => {
    try {
        await ordersDb.updateOrderStatus(userEmail,orderId);
        return SUCCESS_RESPONSES.UPDATED;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default { addToCart,placeOrder };
