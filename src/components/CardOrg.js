import React from 'react';
import { Button, Card, CardBody, CardImg, CardTitle, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { removeOrg } from '../actions/orgActions';
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
    background: "rgba(0,0,0,0.5)",
  }

  return (
    <div>
      <Card style={attributes}>
        <CardImg top width="100%" src={"https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"} alt="Card image cap" />
        <CardBody  className="d-flex flex-column">
          {props.public ?
            <Link to={`/vieworg/${props.id}/`}><CardTitle tag="h4">{props.name}</CardTitle></Link>
            : <Link to={`/org/${props.id}/`}><CardTitle tag="h4">{props.name}</CardTitle></Link>}
          <p>{props.type}</p>
          <p>{props.address}</p>
          <p>{formatPhoneNumber(props.phone)}</p>
          <p><a href={`https://${props.url}`}>{props.url}</a></p>
          {props.logged &&
          <Container>
            <Row>
              <Link to={`/org/edit/${props.id}`}>
                <Button className="align-self-center mr-auto mt-auto" color="warning" >
                Edit
                </Button>
              </Link>
              <Button className="align-self-center ml-auto mt-auto" color="danger"
              onClick={handleRemove}>
                Delete
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
