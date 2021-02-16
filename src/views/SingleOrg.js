import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { removeOrg, updateOrg } from '../actions/orgActions';
import { Button, Container, Col, Row } from 'reactstrap';

class SingleOrg extends Component {
  constructor(props){
    super(props);
    this.state = this.props.org;
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  };

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.org);
  };

  update(ev){
    ev.preventDefault();
    this.props.updateOrg(this.state);
  };

  delete(ev){
    ev.preventDefault();
    console.log(JSON.stringify(this.state))
    this.props.removeOrg(this.state);
    this.setState({firstName:"redirect"})
  };

  render(){
    const { org, pantries } = this.props;
    const hrs = JSON.parse(org.hours).schedule;
    const hours = hrs.map((hr)=>{
        hr[0].toLocaleString('en-US', { hour: 'numeric', hour12: true }) + "-" + hr[1].toLocaleString('en-US', { hour: 'numeric', hour12: true }) +"/n"
    })
    
    if (this.state.firstName === "redirect") {
      return (<Redirect to={`/orgs`}/>)
    }
    if (org && pantries !== null) {
    return (
      <Container>
        <br></br>
        <br></br>
        <div className="mx-auto">
          <img style={{width: "300px", height: "300px"}} src={"https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"} />
          <div>
          <br></br>
            <h5> {org.organization_name} </h5>
            <h7> {org.contact_name} </h7>
            <br></br>
            <br></br>
            <h3> Address: {org.address}</h3>
            <h3> Hours: {hours}</h3>
            <h3> Phone: {org.phone}</h3>
          </div>
        </div>
        <br></br>
        <div>
          <Link to={`/orgs/edit/${org.id}/`}><Button color="primary">Edit</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={this.delete} color="warning">Delete</Button>
        </div>
          <br />
          <br />
        <div>
          {org && pantries ?
            <Fragment>
              <div>
                <h5> This organization has the following pantries locations: </h5>
              </div>
              <Row>
                <Col className="mx-auto" xs="12" s="6" m="3" l="3" xl="3"><CardOrg delete={false} organization_name={org.organization_name} id={organization.id} imageUrl={"https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"} /></Col>
              </Row>
              <br></br>
            </Fragment>
            :
            <div>
              <h5>This organization has no pantries yet! </h5>
              <h5>Please add the pantry to an organization: </h5>
            </div>
          }
          <br></br>
        </div>
      </Container>
      )
    };
    return null
  };
};

const mapStateToProps = ({pantryList, orgList}, {id}) => {
  const pantries = pantryList.pantries.find(pantry => pantry.organization_id == this.props.match.params.id);
  const org = orgList.find( org => org.id == this.props.match.params.id )
  return {
    pantries,
    org
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeOrg: (org) => dispatch(removeOrg(org)),
    updateOrg: (org) => dispatch(updateOrg(org))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrg);