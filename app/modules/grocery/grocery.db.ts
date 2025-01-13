import { ERROR_MESSAGE } from "../../constants/messages.constants";
import { groceryItemsModel } from "./grocery.schema";
import { IGroceryItems } from "./grocery.types";

const createGrocery = async (groceryDetails: IGroceryItems) =>
    await groceryItemsModel.create({ ...groceryDetails });

const getAllItems = async () =>
    await groceryItemsModel.findAll({ where: { isDeleted: false } });

const getItemById = async (id: number) =>
    await groceryItemsModel.findOne({ where: { id } });

const updateGrocery = async (id: number, updates: Partial<IGroceryItems>) => {
    try {
        const item = await groceryItemsModel.findOne({
            where: { id, isDeleted: false },
        });
        if (!item) throw ERROR_MESSAGE.NOT_FOUND_MESSAGE;
        return await item.update(updates);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const deleteGrocery = async (id: number) =>
    await groceryItemsModel.update({ isDeleted: true }, { where: { id } });

export default {
    createGrocery,
    getAllItems,
    getItemById,
    updateGrocery,
    deleteGrocery,
};
