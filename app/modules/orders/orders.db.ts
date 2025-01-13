import { userOrdersModel } from "./orders.schema";


const createOrder = async (user_id: number, orderDetails: any) =>
    userOrdersModel.bulkCreate({ user_id, ...orderDetails });

const updateOrderStatus = async (userEmail: string, orderID: number) =>
    userOrdersModel.update(
        { payment_status: "success", status: "pending", updated_by: userEmail },
        { where: { id: orderID } }
    );
export default { createOrder, updateOrderStatus };
