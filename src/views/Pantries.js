import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listPantries } from '../actions/pantryActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { CardPantry } from '../components/'
import HeaderIndex from "components/HeaderIndex";

function Pantries(props) {
  const dispatch = useDispatch();
  const PantryList = useSelector(state => state.pantryList);
  const { loading: loadingPantries, pantries, error: errorPantries } = PantryList;

  useEffect(() => {
    dispatch(listPantries());
    return () => {};
  }, [])

  return <div className="orgs content-margined">
  <HeaderIndex className="list"></HeaderIndex>
  { loadingPantries ? <div>Loading...</div> :
    errorPantries ? <div>{errorPantries}</div> :
          <Container fluid>
             <Row className="d-flex justify-content-center align-items-center"> <h5 >Pantries</h5></Row>
            <Row>{pantries.map(pantry =>
              <Col xs="4" style={{marginBottom:"30px"}}>
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
