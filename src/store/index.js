import { configureStore } from "@reduxjs/toolkit";
import brand from "./brand";
import modal from "./modal"
const store = configureStore({
    reducer: {
        brand,
        modal
    }
})

export default store