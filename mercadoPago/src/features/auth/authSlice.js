import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "Email",
    dinero: 20000,
    alias: "alias.wallet.pay",
    token: "token1234567890",
    session: false
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { email } = action.payload;
            state.session = true;
        }
    }
})

export const { addUser } = authSlice.actions
export default authSlice.reducer