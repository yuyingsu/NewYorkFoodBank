import React from "react";
import CardLink from './CardLink';
import { Container, Row, Col } from "reactstrap";
import header from '../assets/img/elaine-casap-qgHGDbbSNm8-unsplash.jpg';
import form from '../assets/img/benjamin-brunner-bAcMAhWciiM-unsplash.jpg';
import list from '../assets/img/ricardo-gomez-angel-ltDrvSoyllA-unsplash.jpg';

function HeaderIndex(props) {
  return (
    <>
      <div className="page-header">
        {!props.className ? <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${header})`,
            zIndex: "0"
          }}
        ></div>:props.className == "form"?
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${form})`,
            zIndex: "-1",
            opacity: "0.8"
          }}
        >
        </div>:props.className == "list"?
        <div
            className="page-header-image"
            style={{
              backgroundImage: `url(${list})`,
              zIndex: "-1",
              opacity: "0.8"
            }}
          >
        </div>
        :null
        }
        { !props.className?
        <Container>
          <Col xs="5" style={{paddingTop: "40%", paddingBottom: "40%"}}><CardLink /></Col>
          <div className="content-center brand">

            <h1 className="h1-seo">New York Food Bank</h1>
            <h3>Helping to feed New Yorkers</h3>
          </div>
        </Container>:null
        }
      </div>
    </>
  );
}

export default HeaderIndex;
