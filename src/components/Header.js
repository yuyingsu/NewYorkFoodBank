import React, { Fragment } from "react";
import CardLink from './CardLink';
import { Container, Col } from "reactstrap";
import header from '../assets/img/elaine-casap-qgHGDbbSNm8-unsplash.jpg';
import form from '../assets/img/benjamin-brunner-bAcMAhWciiM-unsplash.jpg';
import list from '../assets/img/ricardo-gomez-angel-ltDrvSoyllA-unsplash.jpg';

function Header(props) {
  return (
    <Fragment>
      <div className="page-header">
        {!props.className ? <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${header})`,
            zIndex: "-1",
          }}
        ></div>
        : props.className == "form"?
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${form})`,
            zIndex: "-1",
            opacity: "0.8"
          }}
        >
        </div>
        : props.className == "list"?
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${list})`,
            zIndex: "-1",
            opacity: "0.8"
          }}
        >
        </div>
        : null
        }
        { !props.className ?
        <Container>
          <Col xs="5" style={{paddingTop: "60%", position:"block", paddingBottom:"15%"}}><CardLink text="Write a proposal explaining what you want to study about the space. You are to include a research question you formulate, 3 scholarly sources that help you write about the space, its history, or something related to its social formation."/><br /><br /><br /></Col>
        </Container> : null
        }
      </div>
    </Fragment>
  );
}

export default Header;
