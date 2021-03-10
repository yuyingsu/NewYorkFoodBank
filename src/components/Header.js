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
          className="page-header-image2"
          style={{
            backgroundImage: `url(${form})`,
            zIndex: "-1",
            opacity: "0.8"
          }}
        >
        </div>
        : props.className == "list"?
        <div
          className="page-header-image2"
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
          <Col xs="5" style={{left: "15px",width: "500px", paddingTop: "25%", position:"absolute"}}><CardLink link="/pantries" text="A food bank is a non-profit organization that collects and distributes food to hunger-relief charities. Food banks act as food storage and distribution depots for smaller front line agencies; and usually do not themselves give out food directly to people struggling with hunger."/><br /><br /><br /></Col>
        </Container> : null
        }
      </div>
    </Fragment>
  );
}

export default Header;
