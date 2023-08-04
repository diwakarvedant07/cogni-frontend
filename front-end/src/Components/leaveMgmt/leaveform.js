
import React, { useState } from "react";
import "./leaveform.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addLeave, SetFormData } from "./LeaveReducers/leaveSlice";

const LeaveForm = (props) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    reason: "",
    startDate: "",
    endDate: "",
    status: "pending"
  });

  const dispatch = useDispatch();

  // Function to handle form submission
  let handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions here with the form data, like making API calls.
    console.log(formData);
    // Reset the form after submission
    setFormData({ firstName: "", lastName: "", reason: "", status: "pending" });
  };

  // Function to handle input changes
  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleStartDateChange = (date) => {
    setFormData({ ...formData, startDate: date.target.value });
  };

  const handleEndDateChange = (date) => {
    setFormData({ ...formData, endDate: date.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newLeave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      reason: formData.reason,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: formData.status,
    };
    props.func(formData)

    dispatch(addLeave(newLeave));
    dispatch(SetFormData(formData));

    setFormData({
        firstName: "",
        lastName: "",
        reason: "",
        startDate: "",
        endDate: "",
        status: "pending"
      });
      console.log(newLeave);
    }
  



  return (
    
    <Container fluid style={{ margin: "20px", padding: "0", width: "90%" }}>
        <h1 style={{fontSize:"30px"}}>Leave Application Form</h1>
      <Form onSubmit={handleSubmit} className="form">
        <Row>
          <Col>
            <div className="field-holder name">
              <Form.Group controlId="firstName">
                <input
                  className="inputLeave"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label className="labelLeave">FirstName</label>
              </Form.Group>
            </div>
          </Col>
          <Col>
            <div className="field-holder name">
              <Form.Group controlId="lastName">
                <input
                  className="inputLeave"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label className="labelLeave">LastName</label>
              </Form.Group>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="field-holder date">
              <Form.Group controlId="startDate">
                <input
                  type="date"
                  className="inputLeave"
                  inputProps={{ required: true }}
                  value={formData.startDate}
                  onChange={handleStartDateChange}
                  required
                />
                <label className="labelLeave">Start Date</label>
              </Form.Group>
            </div>
          </Col>
          <Col>
            <div className="field-holder date">
              <Form.Group controlId="endDate">
                <input
                  type="date"
                  className="inputLeave"
                  inputProps={{ required: true }}
                  value={formData.endDate}
                  onChange={handleEndDateChange}
                  required
                />
                <label className="labelLeave">End Date</label>
              </Form.Group>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="field-holder reason">
              <Form.Group controlId="reason">
                <input
                  className="inputLeave"
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />
                <label className="labelLeave">Reason</label>
              </Form.Group>
            </div>
          </Col>
        </Row>
        <div className="btnleave">
        <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
      </Form>
    </Container>
  );
};

export default LeaveForm;
