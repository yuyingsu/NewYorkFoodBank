import React from "react";
import Map from "../components/Map";
import AGoogleMap from "../components/MyMapComponent";
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
import MyMapComponent from "../components/MyMapComponent";
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
              <Col style={{color:"black"}}className="text-center">
                A Map to visualize the poverty status distribution in NYC
              <Map></Map>
              </Col>
            </Row>
            <Row>
              <Col style={{color:"black"}}className="text-center">
                A Map to visualize the pantry locations on the Google Map
              <MyMapComponent></MyMapComponent>
              </Col>
            </Row>
          </Container>
        </div>

        {/*<DefaultFooter />*/}
      </div>
    </>
  );
}

export default InfoPage;
