import { SUCCESS_RESPONSES } from "../../constants/response.constants";
import groceryDb from "./grocery.db";
import { IGroceryItems } from "./grocery.types";

const createGrocery = async(groceryDetails : IGroceryItems,created_by : string)=>{
    try {
        await groceryDb.createGrocery({...groceryDetails,created_by});
        return SUCCESS_RESPONSES.CREATED
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const getAllItems = async()=>{
    try {
     const items : any = await groceryDb.getAllItems();
     if(items.length){
         return items
     }

     return [];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteGroceryItems = async (groceryItemId : number)=>{
    try {
        await groceryDb.deleteGrocery(groceryItemId);
        return SUCCESS_RESPONSES.DELETED
    } catch (error) {
        console.log(error);
        throw error
    }
}


const updateGroceryItems = async(groceryItemId : number,newGroceryDetails : Partial<IGroceryItems>)=>{
    try {
        await groceryDb.updateGrocery(groceryItemId,newGroceryDetails);
        return SUCCESS_RESPONSES.UPDATED
    } catch (error) {
        console.log(error);
        throw error
    }
}

export default {createGrocery,getAllItems,deleteGroceryItems,updateGroceryItems}