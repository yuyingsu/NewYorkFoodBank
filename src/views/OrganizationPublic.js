import React, { Fragment } from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatPhoneNumber } from 'react-phone-number-input';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Input as ReactstrapInput,
  Container,
  Col,
  Row,
} from "reactstrap";
import { CardPantry } from '../components/'
import { listMyPantries } from '../actions/pantryActions';
import { listOrg, listOrgs, updateOrg } from '../actions/orgActions';
import { Header } from '../components/'

function OrganizationPublic(props) {
  const [organization_name, setOrganizationName] = useState("");
  const [phone, setPhone] = useState();
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const OrgList = useSelector(state => state.org);
  const { loading, org, error } = OrgList;
  const PantryList = useSelector(state => state.myPantryList);
  const { loading: loadingPantries, pantries, error: errorPantries } = PantryList;

  const attributes = {
    border: "5em",
    color: "white",
    background: "rgba(0,0,0,0.5)",
  }

  useEffect(() => {
     dispatch(listOrg(props.id));
     dispatch(listMyPantries(props.id))
    if (org) {
      setAddress(org[0].address)
      setOrganizationName(org[0].organization_name)
      setPhone(org[0].phone)
     setType(org[0].type)
     setUrl(org[0].url)
    }

    return () => {};
  }, [dispatch]);

  return <div className="orgs content-margined">
    <Header className="list" />
    { loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <Fragment>
      <div className="page-header">
        <div className="content" style={{marginTop:"30px"}}>
        <Container style={{marginTop: "120px"}} fluid>
            <Row>
              <Col className="ml-auto mr-auto">
                <Card className="card-login card-plain" style={attributes}>
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <h5>Organization</h5>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <Container>
                        <Row className="d-flex justify-content-center align-items-center">
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
            <Row className="d-flex align-items-center">
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
  }</div>
}

export default OrganizationPublic;
