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
              <ul class="legend">
                <li><span class="a"></span>0-10000</li>
                <li><span class="b"></span>10000-20000</li>
                <li><span class="c"></span>20000-30000</li>
                <li><span class="d"></span>30000-40000</li>
                <li><span class="e"></span>40000-50000</li>
                <li><span class="f"></span>50000-75000</li>
                <li><span class="g"></span>75000+</li>
            </ul>

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
