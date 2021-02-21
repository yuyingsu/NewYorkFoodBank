import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listOrgs } from '../actions/orgActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { CardOrg } from '../components/'
import HeaderIndex from "components/HeaderIndex";

function Organizations(props) {
  const dispatch = useDispatch();
  const OrgList = useSelector(state => state.orgList);
  const { loading: loadingOrgs, orgs, error: errorOrgs } = OrgList;

  useEffect(() => {
    dispatch(listOrgs());
    return () => {};
  }, [])

  console.log(loadingOrgs);
  return <div className="orgs content-margined">
  <HeaderIndex className="list"></HeaderIndex>
  { loadingOrgs ? <div>Loading...</div> :
    errorOrgs ? <div>{errorOrgs}</div> :
          <Container fluid>
            <Row className="d-flex justify-content-center align-items-center"> <h5 >Organizations</h5></Row>
            <Row>{orgs.map(org =>
              <Col xs="4" style={{marginBottom:"30px"}}>
                <CardOrg id={org.id}
                  name={org.organization_name}
                  address={org.address}
                  phone={org.phone}
                  type={org.type}
                  url={org.url}
                />
              </Col>
              )}
            </Row>
          </Container>

  }
  </div>
}

export default Organizations;
