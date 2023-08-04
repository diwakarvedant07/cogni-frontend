import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../ticketGenration/TicketReducers/ticketSlice";
import authReducer from "../Form/AuthReducer";
import leaveReducer from "../leaveMgmt/LeaveReducers/leaveSlice.js"

const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    leave: leaveReducer,  },
});

export default store;
