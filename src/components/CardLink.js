import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

const attributes = {
  border: "5em",
  color: "white",
  height: "400px",
  background: "rgba(0,0,0,0.5)"
}

function CardLink(props) {
  return (
    <Card style={attributes}>
    <CardText>Write a proposal explaining what you want to study about the space. You are to include a research question you formulate, 3 scholarly sources that help you write about the space, its history, or something related to its social formation.</CardText>
    <Link to={`/product/${props.id}`}>
    <CardTitle>Details</CardTitle></Link>
    </Card>
  );
}

export default CardLink;
