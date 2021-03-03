import React, { Fragment } from "react";
import Map from "../components/Map";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

function MapHouseholdIncome() {
  React.useEffect(() => {
    return function cleanup() {
    };
  }, []);

  return (
    <Fragment>
      <div className="wrapper">
        <div className="section section-heat-map">
          <Container className="map-test" style={{marginTop:"30px"}} fluid>
            <Row>
              <Col style={{color:"black"}}className="text-center">
                <h5>Median Household Income Map</h5>
                <Map />
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
      </div>
    </Fragment>
  );
}

export default MapHouseholdIncome;
