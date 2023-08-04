import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    ticketList: [],
    formData: {}, // Add formData as a new state property
  },
  reducers: {
    addTicket: (state, action) => {
      state.ticketList.push(action.payload);
    },
    SetFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { addTicket, SetFormData } = ticketSlice.actions;
export default ticketSlice.reducer;
