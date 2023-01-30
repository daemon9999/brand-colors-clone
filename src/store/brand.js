import { createSlice } from "@reduxjs/toolkit";
import brands from "brands";

const initialState = {
    brands: Object.values(brands).map(b => b),
    searchedBrands: Object.values(brands).map(b => b),
    selectedBrands: [],
    copy: {
        text: "",
        copied: false
    }
}


const brand = createSlice({
    name: "brand",
    initialState: initialState,
    reducers: {
        setBrands: (state, action) => {
            state.brands = action.payload
        },
        setSearchedBrands: (state, action) => {
            state.searchedBrands = action.payload
        },
        setSelectedBrands: (state, action) => {
            state.selectedBrands = action.payload
        },
        setCopy: (state, action) => {
            state.copy = action.payload
        }
}
})

export const {setSearchedBrands, setSelectedBrands, setCopy} = brand.actions
export default brand.reducer