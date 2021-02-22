import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { listMyOrgs } from '../actions/orgActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';
import { CardOrg } from '../components/'

function MyOrgs(props) {
  const dispatch = useDispatch();
  const myOrgList = useSelector(state => state.myOrgList);
  const { loading: loadingOrgs, orgs, error: errorOrgs } = myOrgList;

  useEffect(() => {
    dispatch(listMyOrgs());
    return () => {};
  }, [])

  return <div className="orgs content-margined">
  { loadingOrgs ? <div>Loading...</div> :
    errorOrgs ? <div>{errorOrgs}</div> :
          <Container style={{padding: "0px"}} fluid><Row className="d-flex justify-content-end align-items-end"><Link to='/addorg'><Button>Add Organization</Button></Link></Row>
            <Row className="d-flex justify-content-center align-items-center"> <h5>Pantries</h5></Row>
            <Row>{orgs.map(org =>
              <Col xs="4" style={{marginBottom:"30px"}}>
                <CardOrg id={org.id}
                  name={org.organization_name}
                  address={org.address}
                  phone={org.phone}
                  type={org.type}
                  url={org.url}
                  logged={true}
                />
              </Col>
              )}
            </Row>
          </Container>
  }
  </div>
}

export default MyOrgs;
