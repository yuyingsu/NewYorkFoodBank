import React from 'react';
import { Button, Card, CardBody, CardImg,CardTitle, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { removeOrg } from '../actions/orgActions';
import { connect } from 'react-redux';
import { orgListReducer } from 'reducers/orgReducers';
import { useDispatch } from 'react-redux';
import { formatPhoneNumber } from 'react-phone-number-input'

const CardOrg = (props) => {
  const dispatch = useDispatch();

  function handleRemove () {
    dispatch(removeOrg(props.org));
  }

  const attributes = {
    border: "5em",
    color: "white",
    height: "600px",
    background: "rgba(0,0,0,0.5)",
  }
console.log(props)
  return (
    <div>
      <Card style={attributes}>
        <CardImg top width="100%" src={"https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"} alt="Card image cap" />
        <CardBody  className="d-flex flex-column">
          <Link to={`/org/${props.id}/`}><CardTitle tag="h5">{props.name}</CardTitle></Link>
          <p>{props.type}</p>
          <p>{props.address}</p>
          <p>{formatPhoneNumber(props.phone)}</p>
          <p>{props.url}</p>
          {props.logged &&
          <Container>
            <Row>
            <Link to={`/org/edit/${props.id}`}>
              <Button className="align-self-center mr-auto mt-auto" color="warning" >
              Edit
              </Button></Link>
              <Button className="align-self-center ml-auto mt-auto" color="danger"
              onClick={handleRemove}>Delete
              </Button>
            </Row>
          </Container>
          }
        </CardBody>
      </Card>
    </div>
  );
};

export default CardOrg;
