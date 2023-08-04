import React, { useState } from "react";
import { Table, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const CompletedTaskTable = () => {
  const formData = useSelector((state) => state.tickets.formData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const isWithinDateRange = (date, start, end) => {
    if (!start && !end) return true;

    const taskDate = new Date(date);
    const rangeStartDate = start ? new Date(start) : null;
    const rangeEndDate = end ? new Date(end) : null;

    if (rangeStartDate && rangeEndDate) {
      return taskDate >= rangeStartDate && taskDate <= rangeEndDate;
    }

    if (rangeStartDate) {
      return taskDate >= rangeStartDate;
    }

    if (rangeEndDate) {
      return taskDate <= rangeEndDate;
    }

    return false;
  };

  return (
    <div style={{ flex: "1", marginRight: "20px",marginLeft:"20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2  style={{paddingTop:"6px"}}>Completed Task</h2>

      <Row style={{ marginBottom: "10px", padding: "10px" }}>
        <Col>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control type="date" value={startDate} onChange={handleStartDateChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="endDate">
            <Form.Label>End Date:</Form.Label>
            <Form.Control type="date" value={endDate} onChange={handleEndDateChange} />
          </Form.Group>
        </Col>
      </Row>

      <div style={{ overflowX: "auto" }}>
        <Table striped bordered hover style={{ width: "100%", border: "none", marginBottom: "0" }}>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Title</th>
              <th style={{ width: "35%" }}>Description</th>
              <th style={{ width: "15%" }}>Start Date</th>
              <th style={{ width: "15%" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {formData && isWithinDateRange(formData.startDate, startDate, endDate) && (
              <tr>
                <td>{formData.title}</td>
                <td>{formData.description}</td>
                <td>{formData.startDate}</td>
                <td>{formData.Status}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CompletedTaskTable;
