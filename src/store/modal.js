import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    modal: false
}

const modal = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        handleModal: state => {
            state.modal = !state.modal
        }
    }
})

export const {handleModal} = modal.actions
export default modal.reducer