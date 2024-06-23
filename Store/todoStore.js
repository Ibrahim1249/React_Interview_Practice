import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";


const todoStore = configureStore({
    reducer:todoSlice
})
export default todoStore;