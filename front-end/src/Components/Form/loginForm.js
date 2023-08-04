import React, { useState } from "react";
import classes from "./loginForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./AuthReducer";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import companyLogo from "../Images/cogni white logo.webp";
import axios from "axios";

const SignIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendLoginNotification = async (email) => {
    try {
      await axios.post("http://your-email-service-api.com/send-notification", {
        email: email,
        message: "You have successfully logged in.",
      });
    } catch (error) {
      console.error("Error sending login notification:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://125.99.0.13:8000/login", {
        email: formData.email,
        password: formData.password,
      });
      const { token, ...userDetails } = response.data;

      localStorage.setItem("token", token);

      dispatch(setUser({ token, userDetails }));
      sendLoginNotification(formData.email);

      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh", maxWidth: "600px" }}
    >
      <Form
        className={`${classes.loginForm} w-100 max-width-md p-4 rounded shadow`}
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#1e2839" }}
      >
        <div className={classes.logoContainer}>
          <img src={companyLogo} alt="Company Logo" className={classes.logo} />
        </div>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label style={{ color: "white" }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label style={{ color: "white" }}>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input passwordInput"
          />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Button variant="primary" type="submit" className="button">
              Submit
            </Button>
          </Col>
          <Col className="text-end">
            <Link to="/forgot-password" className="text-decoration-none forget">
              Forgot Password?
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SignIn;
