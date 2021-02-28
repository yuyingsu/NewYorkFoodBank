import React, { Component } from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'react-phone-number-input/input'
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
  Label
} from "reactstrap";
import { Link } from "react-router-dom";
import ReactPlacesSearchBar from "../components/ReactPlacesSearchBar";
import { register } from '../actions/orgActions';
import Header from "components/Header";
import { useHistory } from "react-router-dom";

function AddOrganization() {
  const [organization_name, setOrganizationName] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [type, setType] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [url, setUrl] = useState("");
  const orgRegister = useSelector(state => state.orgRegister);
  const { loading, orgInfo, error } = orgRegister;
  const dispatch = useDispatch();
  let history = useHistory();

  const intialValues = { organization_name: "", phone: "", type: "", address: "", url: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};

    if (!organization_name) {
      errors.organization_name = "Cannot be blank";
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

    if (!url) {
      errors.url = "Cannot be blank";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      let test = JSON.stringify({
        "organization_name": organization_name,
        "phone": phone,
        "type": type,
        "address": address,
        "url": url,
      });
      console.log(test);
      dispatch(register(organization_name, phone, type, address, url));
      history.push('/myorgs/');
    }
  }, [formErrors]);

  return (
    <>
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
                      <h5>Add Organization</h5>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <FormGroup>
                    <ReactstrapInput
                      type="select"
                      name="type"
                      id="type"
                      onChange={(e) => setType(e.target.value)}
                      className={formErrors.type && "input-error"}
                    >
                       <option key={0} value={null}> {"Organization Type"} </option>
                      <option>Food Distribution</option>
                      <option>Food Processing</option>
                      <option>Religion</option>
                      <option>Government</option>
                      <option>Research</option>
                      <option>Other</option>
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
                        className={formErrors.organization_name && "input-error"}
                        placeholder="Organization Name"
                        type="text"
                        onChange={(e) => setOrganizationName(e.target.value)}
                      ></ReactstrapInput>

                    </InputGroup>            {formErrors.organization_name && (
                    <span className="error">{formErrors.organization_name}</span>
          )}
                    <div className={formErrors.address && "input-error"}><ReactPlacesSearchBar
                     address={setAddress}
                   /></div>{formErrors.address && (
                    <span className="error">{formErrors.address}</span>
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
          )}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactstrapInput
                        placeholder="URL"
                        className={formErrors.url && "input-error"}
                        onChange={(e) => setUrl(e.target.value)}
                        type="url"
                      ></ReactstrapInput>

                    </InputGroup>    {formErrors.url && (
                    <span className="error">{formErrors.url}</span>
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
    </>
  );
}

export default AddOrganization;
