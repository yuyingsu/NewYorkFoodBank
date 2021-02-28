import React, { Fragment } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import { Header } from '../components/'
import { useHistory } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
<<<<<<< Updated upstream
    if (!error) history.push('/myorgs/');
=======
    history.go(-1);
>>>>>>> Stashed changes
  }

  return (
    <Fragment>
    <Header className="form" />
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/benjamin-brunner-bAcMAhWciiM-unsplash.jpg") + ")",
          }}
        ></div>
        <div className="content">
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          <Container>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <h5>Register</h5>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                      >
                      </Input>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                      >
                      </Input>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      >
                      </Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={submitHandler}
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

export default Register;
