import { Link } from 'react-router-dom';
import React from "react";
import { Container, Row, Col } from "reactstrap";

const attributes = {
  background: "rgba(0,0,0,0.5)",
  width: "100%",
  left: "0",
  right: "0",
  position: "absolute"
}

function Footer() {
  return (
    <>
      <footer className="footer footer-default">
        <Container style={{margin:"0", padding:"0"}} fluid>
          <Row>
            <Col>
                <Link
                  href="/"
                >
                  About Us
                </Link>
            </Col>
            <Col>
                <Link
                  to ="/contact"
                >
                  Contact Us
                </Link>
            </Col>
              <Col>
                <Link
                  to="/donate"
                >
                  Donate
                </Link>
              </Col>
          </Row>
          <Row style={attributes} className="copyright" id="copyright">
            <Col xs="5">
            © {new Date().getFullYear()} New York Food Bank
            </Col>
            <Col xs="7"><Link
              to="/terms"
            >
              Terms and Conditions
            </Link>
            &nbsp;|&nbsp;
            <Link to="/privacy"
            >
               Privacy Policy
            </Link>
            </Col>
          </Row>
        </Container>

      </footer>
    </>
  );
}

export default Footer;
