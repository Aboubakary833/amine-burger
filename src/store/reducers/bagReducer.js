import { createSlice } from "@reduxjs/toolkit";

const BagReducer = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        fillBagStore(state, action) {
            state = action.payload
            return state
        }
    }
})

export const {fillBagStore} = BagReducer.actions
export default BagReducer