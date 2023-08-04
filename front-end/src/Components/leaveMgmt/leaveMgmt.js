import React, { useState } from "react";
import "react-datetime/css/react-datetime.css";
import classes from "./leave.module.css";



const LeaveForm=React.lazy(()=>import("./leaveform"))
const LeaveTable=React.lazy(()=>import("./leaveTable"))

function LeaveMgmt() {
  const [isOpen, setIsOpen] = useState(false);

  const openLeaveForm = () => {
    setIsOpen(!isOpen);
  };

  const pull_data = (data) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <div>
      <div>
      <div className={classes.page}>
        <div className={classes.lmpHeading}>
          <h1 style={{fontSize:"30px"}}>Leave Management Portal</h1>
        </div>
        <div className={classes.btn3btn}>
          <button className={classes.btn3} onClick={openLeaveForm}>
            {isOpen ? "X" : "Leave Form"}
          </button>
        </div>
        </div>

        <hr />
        {isOpen ? <LeaveForm func={pull_data} /> : <LeaveTable /> }
      </div>
    
    </div>
  );
}

export default LeaveMgmt;
