import React from "react";
import { Container } from "reactstrap";
import header from '../assets/img/elaine-casap-qgHGDbbSNm8-unsplash.jpg';

function HeaderIndex() {
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <img src={header}></img>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require('../assets/img/elaine-casap-qgHGDbbSNm8-unsplash.jpg') + ")",
          }}
        ></div>
        <Container>
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
