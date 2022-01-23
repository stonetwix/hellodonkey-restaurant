import React from "react";
import { CSSProperties } from "react";
import background from "../../assets/hero-bg.png";

class HeroSection extends React.Component {
  render() {
    return (
      <div style={imageStyle}>
        <div style={headlineStyle}>
          <h1 style={cursiveTextStyle}>Mexican</h1>
          <h1 style={textStyle}>craft food</h1>
        </div>
      </div>
    );
  }
}

export default HeroSection;

const imageStyle: CSSProperties = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

const headlineStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  height: "60rem",
  marginTop: window.innerWidth > 786 ? "0" : "-5rem",
};

const cursiveTextStyle: CSSProperties = {
  fontFamily: "Berkshire Swash",
  color: "#F2545B",
  fontSize: window.innerWidth > 786 ? "10rem" : "5rem",
};

const textStyle: CSSProperties = {
  fontFamily: "Staatliches",
  color: "#F2545B",
  fontSize: window.innerWidth > 786 ? "8rem" : "4rem",
  marginTop: window.innerWidth > 786 ? "-5rem" : "-2rem",
};
