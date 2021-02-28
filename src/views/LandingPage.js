import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Footer from "../components/Footer";
import Header from "../components/Header";
//import DefaultFooter from "components/Footers/DefaultFooter.js";
import centerImage from '../assets/img/joel-muniz-3k3l2brxmwQ-unsplash.jpg';
import leftImage from '../assets/img/nico-smit-NFoerQuvzrs-unsplash.jpg';
import CardLink from '../components/CardLink'

function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
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
                <div className="span12" style={{position: "absolute", zIndex: "1", width:"94%"}}>
                      <CardLink />
                    </div>
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
                  {/*<div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        `url(${centerImage})`
                    }}
                  ></div>*/}
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <h5>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </h5>
                  <h5>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </h5>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
