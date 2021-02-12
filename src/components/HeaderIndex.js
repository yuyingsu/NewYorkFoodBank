import React from "react";
import CardLink from './CardLink';
import { Container, Row, Col } from "reactstrap";
import header from '../assets/img/elaine-casap-qgHGDbbSNm8-unsplash.jpg';

function HeaderIndex() {
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${header})`,
          }}
        ></div>
        <Container>
          <Col xs="5" style={{paddingTop: "40%", paddingBottom: "40%"}}><CardLink /></Col>
          <div className="content-center brand">

            <h1 className="h1-seo">New York Food Bank</h1>
            <h3>Helping to feed New Yorkers</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeaderIndex;
