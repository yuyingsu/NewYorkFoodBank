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
  Row,
  Label,
  ListGroupItemHeading
} from "reactstrap";
import { Link } from "react-router-dom";
import { CardPantry } from '../components/'
import ReactPlacesSearchBar from "../components/ReactPlacesSearchBar";
import { listMyPantries } from '../actions/pantryActions';
import { listOrg, listOrgs, updateOrg } from '../actions/orgActions';

function Organization(props) {
  const [organization_name, setOrganizationName] = useState("");
  const [phone, setPhone] = useState();
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const id = props.id;
  const currentOrg = useSelector(state => state.org);
  const dispatch = useDispatch();
  const OrgList = useSelector(state => state.myOrgList);
  const { loading, orgs, error } = OrgList;
  const PantryList = useSelector(state => state.myPantryList);
  const { loading: loadingPantries, pantries, error: errorPantries } = PantryList;
  const org = orgs.find(org => org.id == props.id);
  console.log("my pantries" + JSON.stringify(PantryList))
  useEffect(() => {
    {
      dispatch(listMyPantries(props.id))
      dispatch(listOrg(props.id));
    if (org) {
      setAddress(org.address)
    setOrganizationName(org.organization_name)
    setPhone(org.phone)
    setType(org.type)
    setUrl(org.url)
    }
    }
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let test = JSON.stringify({
      "organization_name": organization_name,
      "phone": phone,
      "type": type,
      "address": address,
      "url": url,
    });
    console.log(test);
    dispatch(updateOrg(id, organization_name, phone, type, address, url));
  }

  return <div className="orgs content-margined">
  { loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
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
            <Row><Col className="ml-auto mr-auto">
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
                      id="exampleSelect"
                      onChange={(e) => setType(e.target.value)}
                    >
                       <option key={0} value={null}> {"Type: " + type} </option>
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
            </Row>
            </Container>
            <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <h5 className="text-center">Pantries</h5>
            </Row>
            </Container>
            <Container className="d-flex" fluid>
            { loadingPantries ? <div>Loading...</div> :
               errorPantries ? <div>{errorPantries}</div> :

            <Row className="d-flex align-items-center flex-row flex-wrap" style={{marginTop:"40px"}}>
              {console.log(pantries)}

              {pantries.length > 0 ? pantries.map(pantry =>

              <Col xs="4" style={{width: "300px", height:"300px"}}>
                <CardPantry id={pantry.id}
                  name={pantry.pantry_name}
                  contact={pantry.contact_name}
                  address={pantry.address}
                  phone={pantry.phone}
                  type={pantry.type}
                  hours={pantry.hours}
                  logged={true}
                />
              </Col>
              )
            :
            <Col><h5>No pantries exist for this organization. Add a pantry.</h5></Col>


            }</Row>}

          </Container>
        </div>
      </div>
    </>
  }</div>
}

export default Organization;
