import React from 'react'
import classes from './ticket.module.css';
import { useState } from 'react';

const TicketForm=React.lazy(()=>import("./ticketGenration"));
const Completed = React.lazy(() =>
  import("./View/completedTask")
);
const Pending = React.lazy(() =>
  import("./View/TaskPage")
);

const Ticket = () => {

    const [isOpen, setIsOpen] = useState(false);

  const openTicketForm = () => {
    setIsOpen(!isOpen);
  };

    const [isCompleted, setIsCompleted] = useState(false);

    const toggleTickets = () => {
        setIsOpen(false);
        setIsCompleted(!isCompleted);
    };

  return (
    <div>
       <div>
      <div className={classes.page}>
        <div className={classes.lmpHeading}>
          <h1 style={{fontSize:"30px"}}>Ticket Management </h1>
        </div>
        <div className={classes.btn3btn}>
          <button className={classes.btn3} onClick={toggleTickets}>
            {isCompleted ? "Pending Ticket" : "Completed Tickets"}
          </button>
        </div>
        <div className={classes.btn3btn}>
          <button className={classes.btn3} onClick={openTicketForm}>
            {isOpen ? "X" : "Generate Ticket"}
          </button>
        </div>
        </div>
        <hr/>
        {isOpen ? <TicketForm/> : isCompleted ? <Completed/> : <Pending/>}
        </div> 
    </div>
  )
}

export default Ticket