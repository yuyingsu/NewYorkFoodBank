import React from 'react';
import { Button, Card, CardBody, CardImg,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { removeOrg } from '../actions/orgActions';
import { connect } from 'react-redux';
import { orgListReducer } from 'reducers/orgReducers';

const CardOrg = (props) => {
  function handleRemove () {
    props.removeOrg(props.org);
  }

  return (
    <div>
      <Card style={{height:"450px"}}>
        <CardImg top width="100%" src={"https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"} alt="Card image cap" />
        <CardBody  className="d-flex flex-column">
        <Link to={`/or/${props.id}/`}><CardTitle tag="h5">{props.firstName + " " + props.lastName}</CardTitle></Link>
          <Button className="align-self-center mt-auto" color="warning"
            onClick={handleRemove}>Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ students }, ownProps) => {
  const org = orgListReducer.orgs.find(org => org.id === ownProps.id)
  return {
    org
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeOrg: orgId => {
      dispatch(removeOrg(orgId));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(CardOrg);