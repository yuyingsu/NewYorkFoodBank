import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Header from "../components/Header";
import centerImage from '../assets/img/joel-muniz-3k3l2brxmwQ-unsplash.jpg';
import leftImage from '../assets/img/nico-smit-NFoerQuvzrs-unsplash.jpg';
import CardLink from '../components/CardLink'

function LandingPage() {
  return (
    <Fragment>
      <Container className="d-flex justify-content-between" style={{height: "100vh"}} fluid>
        <Header />
        </Container>
        <Container>
          <div className="content-center brand">
              <h1 className="h1-seo">New York Food Bank</h1>
              <h3>Helping to feed New Yorkers</h3>
            </div>
          <div className="section section-about-us">
            <Container style={{marginBottom:"70px"}}>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Who we are?</h2>
                  <h5 className="description">
                    We collect millions of pounds of food monthly and coordinate with pantries for their distribution. We also help distribution organizations determine where pantries should be located to help the most people in need.
                  </h5>
                </Col>
                <img src={centerImage}
                  className="rounded"
                  style={{display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "20px"}}
                  />
              </Row>
              <div className="separator separator-primary"></div>
              <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    {/*<div className="span12" style={{position: "absolute", zIndex: "1", width:"100%"}}>
                      <CardLink />
                    </div>*/}
                    <div
                      className="rounded"
                      style={{
                        position: "relative",
                        paddingTop: "20px",
                        backgroundImage: `url(${leftImage})`,
                        height: "90vh",
                        width: "100%",
                        zIndex: "0",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                    </div>
                  </Col>
                  <Col md="5">
                    <h3>
                      So what is the purpose of a food bank?
                    </h3>
                    <h5>
                     In the U.S. and sometimes in Canada, food banks don't typically give food direct to the hungry. Instead they act as warehouses, supplying front-line agencies like this Californian soup kitchen. The world's first food bank was St. Mary's Food Bank in Phoenix, Arizona, founded by John van Hengel in 1967. According to sociology professor Janet Poppendieck, hunger within the US was widely considered to be a solved problem until the mid-1960s.
                     </h5>
                     <h5>
                     By the mid-sixties, several states had ended the free distribution of federal food surpluses, instead providing an early form of food stamps which had the benefit of allowing recipients to choose food of their liking, rather than having to accept whatever happened to be in surplus at the time. However, there was a minimum charge and some people could not afford the stamps, leading to severe hunger. One response from American society to the rediscovery of hunger was to step up the support provided by soup kitchens and similar civil society food relief agencies – some of these dated back to the Great Depression and earlier.
                     </h5>
                     <h5>
                     In 1965, while volunteering for a community dining room, van Hengel learned that grocery stores often had to throw away food that had damaged packaging or was near expiration. He started collecting that food for the dining room but soon had too much for that one program. He thought of creating a central location from which any agency can receive donations. Described as a classic case of "if you build it they will come", the first food bank was created with the help of St. Mary's Basilica, which became the namesake of the organization.
                     </h5>
                     <h5>Food banks spread across the United States, and to Canada. By 1976, van Hengel had established the organization known today as Feeding America. As of the early 21st century, their network of over 200 food banks provides support for 90,000 projects. Other large networks exist such as AmpleHarvest.org, created by CNN Hero and World Food Prize nominee Gary Oppenheimer which lists nearly 9,000 food pantries (1 out of every 4 in America) across all 50 states that are eager to receive surplus locally grown garden produce from any of America's 62 million home or community gardeners.
                    </h5>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
      </Container>
    </Fragment>
  );
}

export default LandingPage;
