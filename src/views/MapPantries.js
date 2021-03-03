import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { listPantries } from "actions/pantryActions";
import { useSelector, useDispatch } from 'react-redux';
import MapPantry from "../components/MapPantry";

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
          <Container fluid>
            <Row>
              <Col style={{color:"black"}}className="text-center">
                New York City Pantry Map
              <MapPantry pantries={pantries} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>}
    </Fragment>
  );
}

export default MapPantries;
