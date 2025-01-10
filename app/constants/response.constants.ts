import { MessageHandler } from "../utility/response-handler";
import { SUCCESS_CODES } from "./codes.constants";
import { SUCCESS_MESSAGE } from "./messages.constants";

export const SUCCESS_RESPONSES = {
    CREATED : new MessageHandler(SUCCESS_CODES.CREATED,SUCCESS_MESSAGE.CREATED_MESSAGE)
}