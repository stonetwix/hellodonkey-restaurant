import { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";
import leftSwirl from "../../assets/left-swirl.png";
import rightSwirl from "../../assets/right-swirl.png";
import guacamole from "../../assets/guacamole.png";
import sidesIcon from "../../assets/sides-icon.png";
import mainsIcon from "../../assets/mains-icon.png";
import tacos from "../../assets/mains-menu.png";

const MenuStart = () => {
  return (
    <>
      <div style={headlineRowStyle}>
        <Row>
          <Col xs="auto">
            <img
              src={leftSwirl}
              alt="left swirl"
              width={window.innerWidth > 786 ? "50px" : "30px"}
              style={{ display: "inline" }}
            />
          </Col>
          <Col xs="auto">
            <h1>Selection from our menu</h1>
          </Col>
          <Col xs="auto">
            <img
              src={rightSwirl}
              alt="right swirl"
              width={window.innerWidth > 786 ? "50px" : "30px"}
              style={{ float: "right" }}
            />
          </Col>
        </Row>
      </div>
      <Container fluid>
        <Row>
          <Col sm={6} style={sidesStyle}>
            <div style={{ width: "60%", marginTop: "4rem" }}>
              <img
                src={sidesIcon}
                alt="sidesIcon"
                style={{ float: "left", marginRight: "1rem" }}
                width={"30px"}
              />
              <h2 style={{ color: "white", marginBottom: "2rem" }}>Sides</h2>
              <h4 style={{ color: "white" }}>Lorem ipsum</h4>
              <h5 style={{ color: "white" }}>99 kr</h5>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
              <h4 style={{ color: "white" }}>Lorem ipsum</h4>
              <h5 style={{ color: "white" }}>99 kr</h5>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
              <h4 style={{ color: "white" }}>Lorem ipsum</h4>
              <h5 style={{ color: "white" }}>99 kr</h5>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
              <h4 style={{ color: "white" }}>Lorem ipsum</h4>
              <h5 style={{ color: "white" }}>99 kr</h5>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
            </div>
          </Col>
          <Col sm={6} style={imgSidesStyle}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={6} style={imgMainsStyle}></Col>
          <Col sm={6} style={mainsStyle}>
            <div style={{ width: "60%", marginTop: "4rem" }}>
              <img
                src={mainsIcon}
                alt="sidesIcon"
                style={{ float: "left", marginRight: "1rem" }}
                width={"30px"}
              />
              <h2 style={{ marginBottom: "2rem" }}>Mains</h2>
              <h4>Lorem ipsum</h4>
              <h5>99 kr</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
              <h4>Lorem ipsum</h4>
              <h5>99 kr</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
              <h4>Lorem ipsum</h4>
              <h5>99 kr</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
              <h4>Lorem ipsum</h4>
              <h5>99 kr</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
              <h4>Lorem ipsum</h4>
              <h5>99 kr</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas, odio non laoreet pellentesque, justo est
                suscipit ligula, quis fringilla mi libero.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuStart;

const headlineRowStyle: CSSProperties = {
  background: "#FFDBDA",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "2rem",
  paddingBottom: "1rem",
  width: "100%",
};

const sidesStyle: CSSProperties = {
  background: "#603F8D",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "5rem",
};

const mainsStyle: CSSProperties = {
  background: "#FDE235",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "5rem",
};

const imgSidesStyle: CSSProperties = {
  backgroundImage: `url(${guacamole})`,
  paddingTop: "20rem",
  paddingBottom: "20rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const imgMainsStyle: CSSProperties = {
  backgroundImage: `url(${tacos})`,
  paddingTop: "20rem",
  paddingBottom: "20rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
