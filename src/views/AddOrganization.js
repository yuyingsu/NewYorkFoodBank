import React, { Component } from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Label
} from "reactstrap";

import { Link } from "react-router-dom";
import ReactPlacesSearchBar from "../components/ReactPlacesSearchBar";
// core components
import { TimeGridScheduler, classes } from '@remotelock/react-week-scheduler';
import '@remotelock/react-week-scheduler/index.css';
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import { register } from '../actions/orgActions';

const rangeStrings = [];
const defaultSchedule = rangeStrings.map(range =>
  range.map(dateString => new Date(dateString)),
);

function AddOrganization() {
  const [organizationName, setOrganizationName] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [type, setType] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [geocode, setGeocode] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [schedule, setSchedule] = useState(defaultSchedule);
  const [showSchedule, setShowSchedule] = useState(false);
  const orgRegister = useSelector(state => state.orgRegister);
  const { loading, orgInfo, error } = orgRegister;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let test = JSON.stringify({
      "organization_name": organizationName,
      "contact_name": contactName,
      "phone": phone,
      "type": type,
      "address": address,
      "geocode": geocode,
      "hours": JSON.stringify({schedule})
    });
    console.log(test);
    dispatch(register(test));
  }

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/benjamin-brunner-bAcMAhWciiM-unsplash.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <h5>Add Organization</h5>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <FormGroup>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      onChange={(e) => setType(e.target.value)}
                    >
                       <option key={0} value={null}> {"Organization Type"} </option>
                      <option>Pantry</option>
                      <option>Soup Kitchen</option>
                      <option>Mobile Pantry</option>
                      <option>Mobile Soup Kitchen</option>
                      <option>Senior Service</option>
                      <option>Home Delivery</option>
                    </Input>
                  </FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Organization Name"
                        type="text"
                        onChange={(e) => setOrganizationName(e.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Contact Name"
                        onChange={(e) => setContactName(e.target.value)}
                        type="text"
                      ></Input>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Phone"
                        type="tel"
                        minLength="10"
                        maxLength="10"
                        onChange={(e) => setPhone(e.target.value)}
                      ></Input>
                    </InputGroup>
                   <ReactPlacesSearchBar
                     address={setAddress}
                     geocode={setGeocode}
                   />
                   <Button
                     onClick={() => setShowSchedule(true)}
                   >Set Food Bank Hours</Button>
                   {showSchedule &&
                      <div
                      className="root"
                      style={{
                        width: "100%",
                        height: "600px",
                        "--cell-height": "20px",
                        "--cell-width": "50px"
                      }}
                    >
                      <TimeGridScheduler
                        classes={classes}
                        style={{ width: "100%", height: "100%" }}
                        originDate={new Date("2019-03-04")}
                        schedule={schedule}
                        onChange={setSchedule}
                        visualGridVerticalPrecision={15}
                        verticalPrecision={15}
                        cellClickPrecision={60}
                      />
                    </div>
                   }
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={handleSubmit}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AddOrganization;
