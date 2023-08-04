import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ showModal, handleModal }) => {
  return (
    <Modal show={showModal} onHide={handleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Email Sent</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Confirmation email has been sent for the ticket.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;