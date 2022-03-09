import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login(state, action) {
        state = action.payload
        return state      
        },
        logout(state, action) {
            state = null
            return state
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer