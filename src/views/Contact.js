import React, { Fragment } from "react";
import { useEffect, useState } from 'react';
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

  return (
    <Fragment>
      <div className="wrapper">
        <Header className="form"/>
        <div className="section section-contact-us text-center">
          <Container>
            <form onSubmit={handleSubmit} noValidate>
            <h2 className="title" style={{color:"white"}}>Get in touch</h2>
            <p className="description" style={{color:"white"}}>We'd love to hear from you. Fill out this form to reach us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
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
                <div className="textarea-container">
                  <Input
                    cols="80"
                    type="message"
                    name="message"
                    id="message"
                    value={formValues.message}
                    onChange={handleChange}
                    className={formErrors.message && "input-error"}
                    placeholder="Message"
                    rows="4"
                    type="textarea"
                  />
                  {formErrors.message && (
                    <span className="error">{formErrors.message}</span>
                  )}
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    type="submit"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
            </form>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
