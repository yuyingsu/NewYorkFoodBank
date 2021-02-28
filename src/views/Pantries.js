import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listPantries } from '../actions/pantryActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { CardPantry } from '../components/'
import Header from "components/Header";

function Pantries(props) {
  const dispatch = useDispatch();
  const PantryList = useSelector(state => state.pantryList);
  const { loading: loadingPantries, pantries, error: errorPantries } = PantryList;

  useEffect(() => {
    dispatch(listPantries());
    return () => {};
  }, [])

  return <div className="orgs content-margined">
  <Header className="list"></Header>
  { loadingPantries ? <div>Loading...</div> :
    errorPantries ? <div>{errorPantries}</div> :
          <Container fluid>
             <Row className="d-flex justify-content-center align-items-center"> <h5 style={{color:"white"}}>Pantries</h5></Row><br></br>
            <Row>{pantries.map(pantry =>
              <Col xs="6" style={{marginBottom:"30px"}}>
                <CardPantry id={pantry.id}
                  name={pantry.pantry_name}
                  contact={pantry.contact_name}
                  address={pantry.address}
                  phone={pantry.phone}
                  type={pantry.type}
                  hours={pantry.hours}
                />
              </Col>
              )}
            </Row>
          </Container>
  }
  </div>
}

export default Pantries;
