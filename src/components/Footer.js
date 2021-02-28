import { Link } from 'react-router-dom';
import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const attributes = {
  background: "rgba(0,0,0,0.5)",
  width: "100%",
  left: "0",
  right: "0",
}

function Footer() {
  return (
    <Fragment>
      <footer className="footer footer-default">
        <Container style={{margin:"0", padding:"0", left: "0", right: "0",
          bottom: "0", position: "absolute"}} fluid>
          <Row>
            <Col>
              <Link href="/">About Us</Link>
            </Col>
            <Col>
              <Link to ="/contact">Contact Us</Link>
            </Col>
            <Col>
              <Link to="/donate">Donate</Link>
            </Col>
          </Row>
          <Row style={attributes} className="copyright" id="copyright">
            <Col xs="5" style={{color:"white"}}>
              © {new Date().getFullYear()} New York Food Bank
            </Col>
            <Col xs="7">
              <Link to="/terms">Terms and Conditions</Link>
              &nbsp;|&nbsp;
              <Link to="/privacy">Privacy Policy</Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
}

export default Footer;
