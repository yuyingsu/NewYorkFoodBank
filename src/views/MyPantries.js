import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listPantries } from '../actions/pantryActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { CardOrg } from '../components/'

function Pantries(props) {
  const dispatch = useDispatch();
  const PantryList = useSelector(state => state.pantryList);
  const { loading: loadingPantries, pantries, error: errorPantries } = PantryList;

  useEffect(() => {
    dispatch(listPantries());
    return () => {};
  }, [])

  return <div className="orgs content-margined">
  { loadingPantries ? <div>Loading...</div> :
    errorPantries ? <div>{errorPantries}</div> :
    <Container style={{padding: "0px"}} fluid>
      <Row className="d-flex justify-content-end align-items-end">
        <Link to='/addpantry'>
          <Button>
           Add Pantry
          </Button>
        </Link>
      </Row>
      <Row>
        {pantries.map(pantry =>
          <Col className="d-flex justify-content-center align-items-center" style={{width: "300px", height:"300px"}}>
            <CardOrg id={pantry.id}
              name={pantry.pantry_name}
              contact={pantry.contact_name}
              address={pantry.address}
              phone={pantry.phone}
              type={pantry.type}
              hours={pantry.hours}
              logged={true}
            />
          </Col>
        )}
      </Row>
    </Container>
  }
  </div>
}

export default Pantries;
