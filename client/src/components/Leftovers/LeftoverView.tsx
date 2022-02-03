import { Col, Row } from "antd";
import React, { CSSProperties } from "react";
import LeftOverCardGrid from "./LeftoverCardGrid";
import background from "../../assets/yellow-dotted-bg.png";

class LeftoverView extends React.Component {
  render() {
    return (
      <>
        <Row style={bgStyle}>
          <Col style={headlineStyle}>
            <h1>Buy our leftovers</h1>
          </Col>
        </Row>
        <Row style={textRowStyle}>
          <Col style={{ marginTop: "3rem", padding: "2rem" }}>
            <p>
              Here you'll find food from orders that hasn't been picked up.
              We'll keep them warm for 2 hours for you to buy them for half off.
            </p>
          </Col>
        </Row>
        <LeftOverCardGrid />
      </>
    );
  }
}

export default LeftoverView;

const bgStyle: CSSProperties = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
};

const textRowStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const headlineStyle: CSSProperties = {
  marginTop: "10rem",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "center",
  padding: "2rem 0",
};
