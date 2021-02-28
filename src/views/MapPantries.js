<<<<<<< Updated upstream
import React from "react";
import Map from "../components/Map";
import AGoogleMap from "../components/MyMapComponent";
// reactstrap components
=======
import React, { Fragment } from "react";
>>>>>>> Stashed changes
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { listPantries } from "actions/pantryActions";
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< Updated upstream

// core components
import Header from "../components/Header.js";
import MyMapComponent from "../components/MyMapComponent";
//import DefaultFooter from "components/Footers/DefaultFooter.js";
=======
import MapPantry from "../components/MapPantry";
>>>>>>> Stashed changes

function MapPantries(props) {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.pantryList);
  const { loading, error, pantries } = lists;

  React.useEffect(() => {
    dispatch(listPantries());
    return function cleanup() {
    };
  }, []);

  return (
    <Fragment>
      { loading ? <div>Loading...</div> :
       error ? <div>{error}</div> :
      <div className="wrapper">
        <div className="section section-heat-map">
          <Container>
            <Row>
              <Col style={{color:"black"}}className="text-center">
                New York City Pantry Map
              <MyMapComponent pantries={pantries} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>}
    </Fragment>
  );
}

export default MapPantries;
