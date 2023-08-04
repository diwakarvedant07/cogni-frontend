import React, { useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";

const TicketTable = () => {
  const ticketList = useSelector((state) => state.tickets.ticketList);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filteredTickets = ticketList.filter((ticket) => {
    if (!startDate && !endDate) return true;

    const ticketStartDate = new Date(ticket.startDate);
    const ticketEndDate = new Date(ticket.endDate);

    if (startDate && endDate) {
      const filterStartDate = new Date(startDate);
      const filterEndDate = new Date(endDate);

      return ticketStartDate >= filterStartDate && ticketEndDate <= filterEndDate;
    }

    if (startDate) {
      const filterStartDate = new Date(startDate);

      return ticketStartDate >= filterStartDate;
    }

    if (endDate) {
      const filterEndDate = new Date(endDate);

      return ticketEndDate <= filterEndDate;
    }

    return false;
  });

  return (
    <div style={{ flex: "1", margin: "0 20px", border: "1px solid #ccc", marginBottom: "20px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <h2 style={{paddingTop:"10px"}}>Pending Task</h2>
      </div>

      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Form.Group controlId="startDate">
            <Form.Label style={{paddingLeft:"5px"}}>Start Date:</Form.Label>
            <Form.Control type="date" value={startDate} onChange={handleStartDateChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="endDate" >
            <Form.Label >End Date:</Form.Label>
            <Form.Control type="date" value={endDate} onChange={handleEndDateChange} />
          </Form.Group>
        </Col>
      </Row>

      <Table striped bordered hover style={{ width: "100%", border: "none" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Assign To</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.startDate}</td>
              <td>{ticket.assignTo}</td>
              <td>
                <div>
                  <Button variant="danger" size="sm" title="Cancel">
                    <AiOutlineCloseCircle />
                  </Button>{" "}
                  <Button variant="outline-danger" size="sm" title="Delete">
                    <AiOutlineDelete />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TicketTable;
