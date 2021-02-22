import React, { Component } from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'react-phone-number-input/input'
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
  Label
} from "reactstrap";

import { Link } from "react-router-dom";
import ReactPlacesSearchBar from "../components/ReactPlacesSearchBar";
// core components
import { TimeGridScheduler, classes } from '@remotelock/react-week-scheduler';
import '@remotelock/react-week-scheduler/index.css';
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import { update } from '../actions/pantryActions';

const rangeStrings = [];
const defaultSchedule = rangeStrings.map(range =>
  range.map(dateString => new Date(dateString)),
);

function EditPantry(props) {
  console.log(props)
  const [pantry_name, setPantryName] = React.useState("");
  const [contact_name, setContactName] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [type, setType] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [geocode, setGeocode] = React.useState("");
  const [schedule, setSchedule] = useState(defaultSchedule);
  const [showSchedule, setShowSchedule] = useState(false);
  const PantryList = useSelector(state => state.myPantryList);
  const { loading, pantries, error } = PantryList;
  const pantry = pantries.find(pantry => pantry.id == props.id);
  const dispatch = useDispatch();
  const pantry_id = props.id;

  useEffect(() => {
    {
      console.log(pantry.pantry_name)
      setPantryName(pantry.pantry_name);
      setContactName(pantry.contact_name);
      setPhone(pantry.phone);
      setType(pantry.type);
      setAddress(pantry.address);
    }
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
   /* let test = JSON.stringify({
      "pantry_name": pantry_name,
      "contact_name": contact_name,
      "phone": phone,
      "type": type,
      "address": address,
      "geocode": geocode,
      "hours": JSON.stringify({schedule})
    });
    console.log(test);*/
    dispatch(update(pantry_name, pantry_id, contact_name, phone, type, address, geocode, schedule));
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
                      <h5>Edit Pantry</h5>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <FormGroup>
                    <ReactstrapInput
                      type="select"
                      name="select"
                      defaultValue={type}
                      value={type}
                      id="exampleSelect"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option key={0} value={null}> {"Pantry Type"} </option>
                      <option>Pantry</option>
                      <option>Soup Kitchen</option>
                      <option>Mobile Pantry</option>
                      <option>Mobile Soup Kitchen</option>
                      <option>Senior Service</option>
                      <option>Home Delivery</option>
                    </ReactstrapInput>
                  </FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactstrapInput
                        placeholder="Pantry Name"
                        type="text"
                        value={pantry_name}
                        onChange={(e) => setPantryName(e.target.value)}
                      ></ReactstrapInput>
                    </InputGroup>
                    <ReactPlacesSearchBar
                        address={setAddress}
                        geocode={setGeocode}
                        value={address}
                      />
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactstrapInput
                        placeholder="Contact Name"
                        value={contact_name}
                        onChange={(e) => setContactName(e.target.value)}
                        type="text"
                      ></ReactstrapInput>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Phone Number"
                        country="US"
                        value={phone}
                        minLength="14"
                        maxLength="14"
                        onChange={setPhone}/>
                    </InputGroup><br></br>
                   <Button
                     onClick={() => setShowSchedule(true)}
                   >Set Pantry Hours</Button>
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

export default EditPantry;
