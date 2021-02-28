import React, { Fragment } from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< Updated upstream
import { MyMapComponent } from '../components/'
// reactstrap components
=======
import { MapPantry } from '../components/'
>>>>>>> Stashed changes
import {
  Card,
  CardHeader,
  CardBody,
  Input as ReactstrapInput,
  Container,
  Col,
  Row,
} from "reactstrap";
import { listSinglePantry } from '../actions/pantryActions';

function Pantry(props) {
  const dispatch = useDispatch();
  const SinglePantry = useSelector(state => state.singlePantry);
  const { loading, pantry, error } = SinglePantry;

  useEffect(() => {
    dispatch(listSinglePantry(props.id))
    return () => {};
  }, []);

  return <div className="orgs content-margined">
  { loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <Fragment>
      <div className="content">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto">
              <Card className="card-login card-plain">
<<<<<<< Updated upstream
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <h5>Pantry Map</h5>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <MyMapComponent pantries={pantry}/>
                  </CardBody>

=======
                <CardHeader className="text-center">
                  <div className="logo-container">
                    <h5>Pantry Map</h5>
                  </div>
                </CardHeader>
                <CardBody>
                  <MapPantry pantries={pantry}/>
                </CardBody>
>>>>>>> Stashed changes
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  }
  </div>
}

export default Pantry;
