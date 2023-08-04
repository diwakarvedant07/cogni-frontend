import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import LoadingSpinner from "../Layouts/UI/loadingSpinner";


import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetFormData } from "./TicketReducers/ticketSlice";
import { addTicket } from "./TicketReducers/ticketSlice";

const TicketGeneration = () => {
  const [isLoading, setIsLoading] = useState(false);

  
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    storyPoints: "",
    startDate: "",
    endDate: "",
    assignTo: "",
    remark: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStartDateChange = (date) => {
    setFormData({ ...formData, startDate: date.format() });
  };

  const handleEndDateChange = (date) => {
    setFormData({ ...formData, endDate: date.format() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newTicket = {
      id: formData.title.toLowerCase().replace(/\s/g, "-"),
      title: formData.title,
      description: formData.description,
      storyPoints: formData.storyPoints,
      startDate: formData.startDate,
      endDate: formData.endDate,
      assignTo: formData.assignTo,
      remark: formData.remark,
    };

    dispatch(addTicket(newTicket));
    dispatch(SetFormData(formData));

    setFormData({
      title: "",
      description: "",
      storyPoints: "",
      startDate: "",
      endDate: "",
      assignTo: "",
      remark: "",
    });
    setIsLoading(false);
    history.push("/submitted-data");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "98%",
          boxShadow: "0 2px 4px rgba(2, 2, 44, 0.842)",
          padding: "20px",
          marginTop: "7px",
          paddingBottom: "10px",
        }}
      >
         {isLoading && (
          <div >
            <div ><LoadingSpinner/></div>
          </div>
        )}
     
       
        <Container fluid style={{ margin: "0", padding: "0" }}>
          <Form onSubmit={handleSubmit} style={{ margin: "0", padding: "0" }}>
            <h1>Generate Task</h1>

            <Row>
              <Col>
                <Form.Group controlId="title" className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="storyPoints" className="mb-3">
                  <Form.Label>Story Points</Form.Label>
                  <Form.Control
                    type="number"
                    name="storyPoints"
                    value={formData.storyPoints}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="description" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="startDate" className="mb-3">
                  <Form.Label>Start Date and Time</Form.Label>
                  <Datetime
                    className="form-control"
                    inputProps={{ required: true }}
                    value={formData.startDate}
                    onChange={handleStartDateChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="endDate" className="mb-3">
                  <Form.Label>End Date and Time</Form.Label>
                  <Datetime
                    className="form-control"
                    inputProps={{ required: true }}
                    value={formData.endDate}
                    onChange={handleEndDateChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="assignTo" className="mb-3">
                  <Form.Label>Assign To</Form.Label>
                  <Form.Control
                    type="text"
                    name="assignTo"
                    value={formData.assignTo}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="remark" className="mb-3">
                  <Form.Label>Additional remark</Form.Label>
                  <Form.Control
                    type="text"
                    name="remark"
                    value={formData.remark}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default TicketGeneration;
