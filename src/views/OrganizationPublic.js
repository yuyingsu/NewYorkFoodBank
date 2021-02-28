import React, { Component } from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'react-phone-number-input/input'
import { formatPhoneNumber } from 'react-phone-number-input';
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
import { Header } from '../components/'

function OrganizationPublic(props) {
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

  const attributes = {
    border: "5em",
    color: "white",
    background: "rgba(0,0,0,0.5)",
  }

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

  return <div className="orgs content-margined">
    <Header className="list" />
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
        <div className="content" style={{marginTop:"30px"}}>
          <Container>
            <Row><Col className="ml-auto mr-auto">
              <Card className="card-login card-plain" style={attributes}>
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <h5>Organization</h5>
                    </div>
                  </CardHeader>
                  <CardBody><Container><Row className="d-flex justify-content-center align-items-center">
                                    {"Type: " + type}<br></br>
                          {organization_name}<br></br>{address}<br></br>
                          {formatPhoneNumber(phone)}<br></br>
                          {url}
                    </Row>
                    </Container>
                    </CardBody>

                </Form>
              </Card>
            </Col>
            </Row>
            </Container><br></br><br></br>
            <Container fluid style={{padding: "0px"}} fluid>
            <Row className="d-flex align-items-center" ><Col><h5 style={{color:"white"}}>Pantries</h5></Col><br></br><br></br></Row>
            </Container>
            <Container fluid>
            { loadingPantries ? <div>Loading...</div> :
               errorPantries ? <div>{errorPantries}</div> :

            <Row>
              {console.log(pantries)}

              {pantries.length > 0 ? pantries.map(pantry =>

              <Col xs="6" style={{marginBottom: "30px"}}>
                <CardPantry id={pantry.id}
                  name={pantry.pantry_name}
                  contact={pantry.contact_name}
                  address={pantry.address}
                  phone={pantry.phone}
                  type={pantry.type}
                  hours={pantry.hours}
                />
              </Col>
              )
            :
            <Col><h5 style={{color:"white"}}>No pantries exist for this organization.</h5></Col>


            }</Row>}

          </Container>
        </div>
      </div>
    </>
  }</div>
}

export default OrganizationPublic;
