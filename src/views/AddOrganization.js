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
import ReactPlacesSearchBar from "../components/ReactPlacesSearchBar";
import { register } from '../actions/orgActions';
import { Header } from "../components/";
import { useHistory } from "react-router-dom";

function AddOrganization() {
  const [organization_name, setOrganizationName] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [type, setType] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [url, setUrl] = useState("");
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
      dispatch(register(organization_name, phone, type, address, url));
      history.push('/myorgs/');
    }
  }, [formErrors]);

  return (
    <Fragment>
      <div className="page-header">
        <Header className="form" />
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
                    <ReactstrapInput
                      type="select"
                      name="select"
                      id="exampleSelect"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option key={0} value={null}> {"Organization Type"} </option>
                      <option>Food Distribution</option>
                      <option>Food Processing</option>
                      <option>Religion</option>
                      <option>Government</option>
                      <option>Research</option>
                      <option>Other</option>
                    </ReactstrapInput>
                  </FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactstrapInput
                        placeholder="Organization Name"
                        type="text"
                        onChange={(e) => setOrganizationName(e.target.value)}
                      >
                      </ReactstrapInput>
                    </InputGroup>
                    {formErrors.organization_name && (
                      <span className="error">{formErrors.organization_name}</span>
                    )}
                    <div className={formErrors.address && "input-error"}>
                      <ReactPlacesSearchBar
                        address={setAddress}
                      />
                    </div>{formErrors.address && (
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
                        onChange={(e) => setUrl(e.target.value)}
                        type="url"
                      >
                      </ReactstrapInput>
                    </InputGroup>
                    {formErrors.url && (
                      <span className="error">{formErrors.url}</span>
                    )}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={handleSubmit}
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

export default AddOrganization;
