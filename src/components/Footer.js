/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
const attributes = {
  background: "rgba(0,0,0,0.5)",
  width: "100%",
  margin: "0",
  padding: "0",
  position: "-35px"
}

function Footer() {
  return (
    <>
      <footer className="footer footer-default">
        <Container style={{margin:"0", padding:"0"}}>
          <Row>
            <Col>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  About Us
                </a>
            </Col>
            <Col>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Contact Us
                </a>
            </Col>
              <Col>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Donate
                </a>
              </Col>
          </Row>
          <Row style={attributes} className="copyright" id="copyright">
            <Col xs="5">
            © {new Date().getFullYear()} New York Food Bank
            </Col>
            <Col xs="7"><a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Terms and Conditions
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
               Privacy Policy
            </a>
            </Col>
          </Row>
        </Container>

      </footer>
    </>
  );
}

export default Footer;
