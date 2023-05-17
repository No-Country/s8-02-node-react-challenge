import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "Nombre Completo",
    alias: "alias.wallet.pay",
    token: "token1234567890",
    session: true
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
})

export const { } = authSlice.actions
export default authSlice.reducer