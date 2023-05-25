import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";
const { loadState, saveState } = useLocalStorage();
const persistedState = loadState();


const initialState = {
    isLoggedIn: false,
    user: '',
}
export const authSlice = createSlice({
    name: "auth",
    initialState: persistedState || initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload;
            saveState(state);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = '';
            saveState(state);
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer