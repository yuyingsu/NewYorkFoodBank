import React, { Fragment } from "react";

// reactstrap components
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
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import { Header } from '../components/'

<<<<<<< Updated upstream

function LoginPage(props) {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
=======
function Login(props) {
>>>>>>> Stashed changes
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
<<<<<<< Updated upstream
=======
    history.push('/');
>>>>>>> Stashed changes
  }
  return (
    <Fragment>
      <Header className="form" />
      <div className="page-header">
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <h5>Log In</h5>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg"
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
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
                    <div className="pull-left">
                      <h6>
                        <Link to={'/register'}>
                          Create Account
                        </Link>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
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

export default LoginPage;
