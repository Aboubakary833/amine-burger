import { createSlice } from "@reduxjs/toolkit";

const commandReducer = createSlice({
    name: 'commands',
    initialState: [],
    reducers: {
        fillCommandStore(state, action) {
            state = action.payload
            return state
        }
    }
})

export const {fillCommandStore} = commandReducer.actions
export default commandReducer