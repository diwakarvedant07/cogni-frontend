import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";


const LeaveTable = () => {
    const leaveList = useSelector((state) => state.leave.leaveList);
    console.log("hello from leave form");

    return (
      <div style={{ flex: "1", marginRight: "20px",marginLeft:"20px", border: "1px solid #ccc", marginBottom: "20px" }}>
        <h2  style={{paddingTop:"6px", textAlign:"center", fontSize: "30px"}}>My Leaves</h2>
  
        <div style={{ overflowX: "auto" }}>
          <Table striped bordered hover style={{ width: "100%", border: "none", marginBottom: "0" }}>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>FirstName</th>
                <th style={{ width: "20%" }}>LastName</th>
                <th style={{ width: "45%" }}>Reason</th>
                <th style={{ width: "15%" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveList.map((leave) => (
                <tr>
                  <td>{leave.firstName}</td>
                  <td>{leave.lastName}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  };
  
  export default LeaveTable;