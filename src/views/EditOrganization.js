import React, { Fragment } from "react";
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
} from "reactstrap";
import { Header } from "../components/";
import { updateOrg } from '../actions/orgActions';
import { useHistory } from "react-router-dom";
import { listMyOrgs } from '../actions/orgActions';

function EditOrganization(props) {
  const [organization_name, setOrganizationName] = useState("");
  const [phone, setPhone] = useState();
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const id = props.id;
  const dispatch = useDispatch();
  const { loading, orgs, error } = useSelector(state => state.myOrgList);
  const org = orgs.find(org => org.id == props.id);
  let history = useHistory();

  useEffect(() => {
    setAddress(org.address);
    setOrganizationName(org.organization_name);
    setPhone(org.phone);
    setType(org.type);
    setUrl(org.url);

    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrg(id, organization_name, phone, type, address, url));
    dispatch(listMyOrgs());
    history.push('/myorgs');
  }

  return <div className="orgs content-margined">
    <Header className="form" />
    { loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
    <Fragment>
      <div className="page-header">
      {console.log(org)}
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/benjamin-brunner-bAcMAhWciiM-unsplash.jpg") + ")",
          }}
        >
        </div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <h5>Edit Organization</h5>
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
                        <option key={0} value={null}> {"Organization Type"} </option>
                        <option>Food Distribution</option>
                        <option>Food Processing</option>
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
                        value={organization_name}
                        onChange={(e) => setOrganizationName(e.target.value)}
                      ></ReactstrapInput>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactstrapInput
                        placeholder="Address"
                        type="textarea"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                    </InputGroup>
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
                        value={url}
                      ></ReactstrapInput>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={handleSubmit}
                      size="lg"
                    >
                      Update
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </Fragment>
  }
  </div>
}

export default EditOrganization;
