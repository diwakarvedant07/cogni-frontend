import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import classes from './ticketUpdate.module.css';
import CustomModal from "./customModal";

const TicketPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const [updateFormData, setUpdateFormData] = useState({
    id: "",
    title: "",
    description: "",
    workStatus: "",
  });

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // ticket logic 
    console.log("Update Form Data:", updateFormData);

    setUpdateFormData({
      id: "",
      title: "",
      description: "",
      workStatus: "",
    });

    // Show the modal
    handleModal();
  };

  const handleUpdateChange = (e) => {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.ticketContainer}>
      <div
        className={classes.addTicket}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(2, 2, 44, 0.842)",
          background: "white",
        }}
      >
        <h1>Update Ticket</h1>
        <Form onSubmit={handleUpdateSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="updateId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={updateFormData.id}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="updateTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={updateFormData.title}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="updateDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={updateFormData.description}
                onChange={handleUpdateChange}
                rows={4}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="updateWorkStatus">
              <Form.Label>Work Status</Form.Label>
              <Form.Control
                as="select"
                name="workStatus"
                value={updateFormData.workStatus}
                onChange={handleUpdateChange}
                required
              >
                <option value="">Select</option>
                <option value="going">Going</option>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
              </Form.Control>
            </Form.Group>
          </Row>

          {/* ... other update form fields ... */}

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>

      <CustomModal showModal={showModal} handleModal={handleModal} />
    </div>
  );
};

export default TicketPage;
