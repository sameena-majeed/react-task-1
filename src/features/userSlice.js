import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        register: (state, action) => {
            state.user = action.payload;
        },
    },
})

//exporting actions
export const { login, logout, register } = userSlice.actions;

//exporting the state, since v'll b using a hook to grab the state frm redux 
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;