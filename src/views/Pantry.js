import React, { Component } from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapPantry } from '../components/'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input as ReactstrapInput,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
  Label,
  ListGroupItemHeading
} from "reactstrap";
import { Link } from "react-router-dom";
import { CardPantry } from '../components/'
import { listSinglePantry } from '../actions/pantryActions';

function Pantry(props) {
  const dispatch = useDispatch();
  const SinglePantry = useSelector(state => state.singlePantry);
  const { loading, pantry, error } = SinglePantry;

  console.log(pantry);
  useEffect(() => {
    dispatch(listSinglePantry(props.id))
    return () => {};
  }, []);

  return <div className="orgs content-margined">
  { loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <>
        <div className="content">
          <Container>
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
    </>
  }</div>
}

export default Pantry;
