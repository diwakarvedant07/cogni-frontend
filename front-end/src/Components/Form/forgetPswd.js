import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios"

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const data = {
      email,
      name,
      number,
    };

    try {
     
      const response = await axios.post("your_backend_api_url", data);

      console.log("Password reset email sent");

      setEmail("");
      setName("");
      setNumber("");
    } catch (error) {
      console.log("Error occurred while resetting password:", error);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "82vh", maxWidth: "600px" }}
    >
      <Form
        onSubmit={handleSubmit}
        className="w-100 p-4 rounded shadow"
        style={{ backgroundColor: "#1e2839" }}
      >
        <Form.Group controlId="name" className="mb-3">
          <Form.Label style={{ color: "white" }}>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label style={{ color: "white" }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="number" className="mb-3">
          <Form.Label style={{ color: "white" }}>Mobile No.</Form.Label>
          <Form.Control
            type="number"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ForgetPassword;
