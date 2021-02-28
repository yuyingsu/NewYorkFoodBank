import React from 'react';
import { Button, Card, CardBody, CardImg,CardTitle, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { removeOrg } from '../actions/orgActions';
import { connect } from 'react-redux';
import { orgListReducer } from 'reducers/orgReducers';
import { useDispatch } from 'react-redux';
import { formatPhoneNumber } from 'react-phone-number-input'

const CardPantry = (props) => {
  const dispatch = useDispatch();
  const schedule = ['Closed', 'Closed', 'Closed', 'Closed', 'Closed', 'Closed', 'Closed']
  const attributes = {
    border: "5em",
    color: "white",
    background: "rgba(0,0,0,0.5)",
  }
  const hrs = JSON.parse(props.hours).schedule;
  hrs.map((hr)=> {
      const dayOfWeek = new Date(hr[0]).getDay()
        if (schedule[dayOfWeek] === 'Closed') {
        schedule[dayOfWeek] = new Date(hr[0]).toLocaleString('en-US', { hour: 'numeric', hour12: true }) + "-" + new Date(hr[1]).toLocaleString('en-US', { hour: 'numeric', hour12: true })
        } else {
          schedule[dayOfWeek] += ", " + new Date(hr[0]).toLocaleString('en-US', { hour: 'numeric', hour12: true }) + "-" + new Date(hr[1]).toLocaleString('en-US', { hour: 'numeric', hour12: true })
        }
  })

  function handleRemove () {
    dispatch(removeOrg(props.org));
  }

  return (
    <div>
      <Card style={attributes}>
        <CardImg top width="100%" src={"https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"} alt="Card image cap" />
        <CardBody  className="d-flex flex-column">
          <Link to={`/pantry/${props.id}/`}><CardTitle tag="h4">{props.name}</CardTitle></Link>
          <p>{props.type}</p>
          <p>{props.address}</p>
          <p>{props.contact}</p>
          <p>{formatPhoneNumber(props.phone)}</p>
          <p>
            {"Hours"}<br></br>
            {"Sunday: " + schedule[0]}<br></br>
            {"Monday: " + schedule[1]}<br></br>
            {"Tuesday: " + schedule[2]}<br></br>
            {"Wednesday: " + schedule[3]}<br></br>
            {"Thursday: " + schedule[4]}<br></br>
            {"Friday: " + schedule[5]}<br></br>
            {"Saturday: " + schedule[6]}<br></br>
          </p>
          {props.logged &&
          <Container>
            <Row>
              <Link to={`/pantry/edit/${props.id}`}>
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

export default CardPantry;
