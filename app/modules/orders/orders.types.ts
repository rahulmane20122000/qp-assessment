export interface IOrderDetails {
    item: string; 
    item_quantity: number; 
    status?: "pending" | "shipped" | "delivered"; 
    payment_status?: "pending" | "failed" | "success"; 
    user_id: number;
}
