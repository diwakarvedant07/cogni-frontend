import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-4 mb-md-0">
            <h5>Get in touch</h5>
            <a href="mailto:example@gmail.com" className={classes.iconLink}>
              <FaEnvelope />
              <span className={classes.iconText}>example@gmail.com</span>
            </a>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <h5>Follow us</h5>
            <div className={classes.socialIcons}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.iconLink}
              >
                <FaFacebook />
              </a>
              <span className={classes.iconSpace} /> {/* Add this line for space */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.iconLink}
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
