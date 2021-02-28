<<<<<<< Updated upstream
import React from "react";

// reactstrap components
=======
import React, { Fragment } from "react";
import { useEffect, useState } from 'react';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

// core components
import Header from "../components/Header.js";
//import DefaultFooter from "components/Footers/DefaultFooter.js";

function Contact() {
=======
import { useHistory } from "react-router-dom";
import { Header } from "../components/";

function Contact() {
  const intialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Cannot be blank";
    }

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.message) {
      errors.message = "Cannot be blank";
    } else if (values.message.length < 4) {
      errors.message = "Message must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      history.push('/');
    }
  }, [formErrors]);

>>>>>>> Stashed changes
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
<<<<<<< Updated upstream
                <InputGroup
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                  ></Input>
                </InputGroup>
                <InputGroup
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                  ></Input>
                </InputGroup>
=======
                <InputGroup>
                  <Input
                    placeholder="Name"
                    type="name"
                    name="name"
                    id="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className={formErrors.name && "input-error"}
                  />
                </InputGroup>
                {formErrors.name && (
                  <span className="error">{formErrors.name}</span>
                )}
                <InputGroup>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={formErrors.email && "input-error"}
                  />
                </InputGroup>
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
>>>>>>> Stashed changes
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
<<<<<<< Updated upstream
                  ></Input>
=======
                  />
                  {formErrors.message && (
                    <span className="error">{formErrors.message}</span>
                  )}
>>>>>>> Stashed changes
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/*<DefaultFooter />*/}
      </div>
    </Fragment>
  );
}

export default Contact;
