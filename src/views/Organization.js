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
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { CardPantry } from '../components/'
import { listMyPantries } from '../actions/pantryActions';
import { listOrg, listOrgs, updateOrg } from '../actions/orgActions';
import { Header } from '../components/'

function Organization(props) {
  const [organization_name, setOrganizationName] = useState("");
  const [phone, setPhone] = useState();
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const id = props.id;
  const dispatch = useDispatch();
  const OrgList = useSelector(state => state.org);
  const { loading, org, error } = OrgList;
  const PantryList = useSelector(state => state.myPantryList);
  const { loading: loadingPantries, pantries, error: errorPantries } = PantryList;

  useEffect(() => {
    dispatch(listMyPantries(props.id))
    dispatch(listOrg(props.id));
    if (org) {
      setAddress(org[0].address)
      setOrganizationName(org[0].organization_name)
      setPhone(org[0].phone)
      setType(org[0].type)
      setUrl(org[0].url)
    }

    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrg(id, organization_name, phone, type, address, url));
  }

  return <div className="orgs content-margined">
    <Header className="list" />
    { loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
    <Fragment>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/benjamin-brunner-bAcMAhWciiM-unsplash.jpg") + ")",
          }}
        >
        </div>
        <div className="content" style={{marginTop:"30px"}}>
        <Container style={{marginTop: "40px", paddingTop: "30px"}} fluid>
            <Row>
              <Col className="ml-auto mr-auto">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <h5>Organization</h5>
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
                          <option key={0} value={null}> {"Type"} </option>
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
                      >
                      </ReactstrapInput>
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
                      >
                      </ReactstrapInput>
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
                      >
                      </ReactstrapInput>
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
            </Container><br></br><br></br>
            <Container style={{marginBottom: "20px"}} fluid>
              <Row className="d-flex align-items-end justify-content-end">
                <Link to={`/org/${props.id}/addpantry`}>
                  <Button>
                    Add Pantry
                  </Button>
                </Link>
              </Row>
              <Row className="d-flex align-items-center" >
                <Col>
                  <h5 style={{color:"white"}}>
                    Pantries
                  </h5>
                </Col><br></br><br></br>
              </Row>
            </Container>
            <Container style={{paddingBottom: "60px"}} fluid>
            { loadingPantries ? <div>Loading...</div> :
               errorPantries ? <div>{errorPantries}</div> :
            <Row>
              {pantries && pantries.length > 0 ? pantries.map(pantry =>
                <Col xs="6" style={{marginBottom: "30px"}}>
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
              <Col>
                <h5 style={{color:"white"}}>
                  No pantries exist for this organization.
                </h5>
              </Col>
              }
            </Row>}
          </Container>
        </div>
      </div>
    </Fragment>
  }
  </div>
}

export default Organization;
