import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import commandReducer from "./commandsReducer";
import BagReducer from "./bagReducer";

export default combineReducers({
    user: userReducer,
    products: productsReducer,
    commands: commandReducer,
    bag: BagReducer
})
