import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        fillProductStore(state, action) {
            state = action.payload
            return state
        }
    }
})

export const {fillProductStore} = productSlice.actions

export default productSlice.reducer