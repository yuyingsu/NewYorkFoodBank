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
import { pantryListReducer } from "reducers/pantryReducers";
import { listPantries } from "actions/pantryActions";
import { useSelector, useDispatch } from 'react-redux';

// core components
import HeaderIndex from "../components/HeaderIndex.js";
import MyMapComponent from "../components/MyMapComponent";
//import DefaultFooter from "components/Footers/DefaultFooter.js";

function MapAllPantries(props) {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.pantryList);
  const { loading, error, pantries } = lists;

  React.useEffect(() => {
    dispatch(listPantries());
    return function cleanup() {
    };
  }, []);
  return (
    <>{ loading ? <div>Loading...</div> :
       error ? <div>{error}</div> :
      <div className="wrapper">

        <div className="section section-heat-map">
          <Container>
            <Row>
              <Col style={{color:"black"}}className="text-center">
                A Map to visualize the pantry locations on the Google Map
              <MyMapComponent pantries={pantries} />
              </Col>
            </Row>
          </Container>
        </div>

        {/*<DefaultFooter />*/}
      </div>}
    </>
  );
}

export default MapAllPantries;
