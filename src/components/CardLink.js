import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";

const attributes = {
  border: "5em",
  color: "white",
  background: "rgba(0,0,0,0.5)"
}

function CardLink(props) {
  return (
    <Card style={attributes}>
    <CardText>{props.text}</CardText>
    <Link to={`/pantries`}>
    <CardTitle>More Info</CardTitle></Link>
    </Card>
  );
}

export default CardLink;
