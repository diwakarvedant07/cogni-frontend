import React from "react";
import TicketTable from "./ticketTable";

import { useSelector } from "react-redux";


const TaskPage = () => {
 
  
  const ticketList = useSelector((state) => state.tickets.ticketList);

  return (
    <div>
      <TicketTable ticketList={ticketList} />
      
    </div>
  );
};

export default TaskPage;
