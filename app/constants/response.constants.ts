import { MessageHandler } from "../utility/response-handler";
import { ERROR_CODES, SUCCESS_CODES } from "./codes.constants";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./messages.constants";

export const SUCCESS_RESPONSES = {
    CREATED : new MessageHandler(SUCCESS_CODES.CREATED,SUCCESS_MESSAGE.CREATED_MESSAGE)
}

export const ERROR_RESPONSES = {
    INVALID_USER : new MessageHandler(ERROR_CODES.UNAUTHORIZED,ERROR_MESSAGE.INVALID_INPUT)
}