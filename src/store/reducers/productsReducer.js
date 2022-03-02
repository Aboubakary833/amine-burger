import { GET_HOME_PRODUCT } from "../actions/productsActions";


const intitalState = {}

export default function productsReducer(state = intitalState, action) {
    switch (action.type) {
        case GET_HOME_PRODUCT:
            return action.payload
    
        default:
            return state
    }
}