import { createSlice } from "@reduxjs/toolkit";

const leaveSlice = createSlice({
    name: "leave",
    initialState: {
        leaveList: [],
        formData: {},
    },
    reducers: {
        addLeave: (state, action) => {
            state.leaveList.push(action.payload);
        },
        SetFormData: (state, action) => {
            state.formData = action.payload;
        },
    }
});

export const { addLeave, SetFormData } = leaveSlice.actions;
export default leaveSlice.reducer;