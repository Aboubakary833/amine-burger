import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login(state, action) {
        state = action.payload
        return state      
        },
        update(state, action) {
            switch (action.payload.type) {
                case 'identity':
                    state = {
                        ...state, 
                        firstname: action.payload.data.firstname,
                        lastname: action.payload.data.lastname
                    }
                    return state
            
                case 'email':
                    state = {
                        ...state, 
                        email: action.payload.data.email,
                    }
                    return state
                default:
                    return state;
            }
        }
    }
})

export const {login, update} = userSlice.actions
export default userSlice.reducer