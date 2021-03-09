import React, { Fragment } from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapPantry } from '../components/'
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
      <Container style={{marginTop: "70px", paddingBottom: "70px"}} fluid>
          <Row>
            <Col className="ml-auto mr-auto">
              <Card className="card-login card-plain">
                <CardHeader className="text-center">
                  <div className="logo-container">
                    <h5>Pantry Map</h5>
                  </div>
                </CardHeader>
                <CardBody>
                  <MapPantry pantries={pantry}/>
                </CardBody>
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
