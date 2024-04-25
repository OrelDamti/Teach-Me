import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ position: "relative", bottom: 0, width: "100%" }}>
      <Container>
        <Row>
          <Col className="text-center py-5 mt-5"> Copyright &copy; Teach-Me 2024</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
