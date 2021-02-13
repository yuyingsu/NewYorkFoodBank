import React from "react";
import Map from "../components/Map";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import HeaderIndex from "../components/HeaderIndex.js";
import AddressBar from "components/AddressBar";
//import DefaultFooter from "components/Footers/DefaultFooter.js";

function InfoPage() {
  React.useEffect(() => {
    return function cleanup() {
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="section section-heat-map">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                A Map to visualize the poverty status distribution in NYC
              <Map></Map>
              </Col>
            </Row>
          </Container>
        </div>
        <AddressBar></AddressBar>
        {/*<DefaultFooter />*/}
      </div>
    </>
  );
}

export default InfoPage;
