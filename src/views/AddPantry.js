import React, { Fragment } from "react";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
} from "reactstrap";
import { useHistory } from "react-router-dom";
import ReactPlacesSearchBar from "../components/ReactPlacesSearchBar";
import { TimeGridScheduler, classes } from '@remotelock/react-week-scheduler';
import '@remotelock/react-week-scheduler/index.css';
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import { register } from '../actions/pantryActions';
import { Header } from "../components/";

const rangeStrings = [];
const defaultSchedule = rangeStrings.map(range =>
  range.map(dateString => new Date(dateString)),
);

function AddPantry(props) {
  const [pantry_name, setPantryName] = React.useState("");
  const [contact_name, setContactName] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [type, setType] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [geocode, setGeocode] = React.useState("");
  const [schedule, setSchedule] = useState(defaultSchedule);
  const [showSchedule, setShowSchedule] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmitting(true);
  };

  const validate = () => {

    let errors = {};

    if (!pantry_name) {
      errors.pantry_name = "Cannot be blank";
    }

    if (!contact_name) {
      errors.contact_name = "Cannot be blank";
    }

    if (!phone) {
      errors.phone = "Cannot be blank";
    } else if (phone.length < 12) {
      errors.phone = "Phone numbers must be 9 digits";
    }

    if (!type) {
      errors.type = "Cannot be blank";
    }

    if (!address) {
      errors.address = "Cannot be blank";
    }

    if (!geocode) {
      errors.geocode = "Cannot be blank";
    }

    if (!schedule) {
      errors.geocode = "Cannot be blank";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      dispatch(register(pantry_name, contact_name, phone, type, address, geocode, schedule, props.id));
      history.go(-1);
    }
  }, [formErrors]);


  return (
    <Fragment>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/benjamin-brunner-bAcMAhWciiM-unsplash.jpg") + ")",
          }}
        ></div>
        <Header className="form" />
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="card-login card-plain">
                <Form onSubmit={handleSubmit} noValidate>
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <h5>Add Pantry</h5>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <FormGroup>
                    <ReactstrapInput
                      type="select"
                      name="select"
                      id="type"
                      className={formErrors.type && "input-error"}
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
                    {formErrors.type && (
                      <span className="error">{formErrors.type}</span>
                    )}
                  </FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactstrapInput
                        className={formErrors.pantry_name && "input-error"}
                        placeholder="Pantry Name"
                        type="text"
                        onChange={(e) => setPantryName(e.target.value)}
                      ></ReactstrapInput>
                    </InputGroup>
                    {formErrors.pantry_name && (
                      <span className="error">{formErrors.pantry_name}</span>
                    )}
                    <ReactPlacesSearchBar
                        address={setAddress}
                        geocode={setGeocode}
                      />
                    {formErrors.address && (
                      <span className="error">{formErrors.address}</span>
                    )}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactstrapInput
                        placeholder="Contact Name"
                        onChange={(e) => setContactName(e.target.value)}
                        type="text"
                        className={formErrors.contact_name && "input-error"}
                      ></ReactstrapInput>
                    </InputGroup>
                    {formErrors.contact_name && (
                      <span className="error">{formErrors.contact_name}</span>
                    )}
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
                    </InputGroup>
                    {formErrors.phone && (
                      <span className="error">{formErrors.phone}</span>
                    )}<br></br>
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
                    {formErrors.schedule && (
                      <span className="error">{formErrors.schedule}</span>
                    )}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      type="submit"
                      size="lg"
                    >
                      Submit
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default AddPantry;
