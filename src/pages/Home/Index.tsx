import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./index.css";
import logo from "../../utils/imgs/cvc5_logo.png";
import bookSvg from "../../services/shared/assets/book-solid.svg";
import flaskVial from "../../services/shared/assets/flask-vial-solid.svg";
import laptop from "../../services/shared/assets/laptop-solid.svg";

const Home = () => {
  const commomBtnStyle = {
    backgroundColor: "#4298B5",
    color: "#F4F4F8",
    width: "250px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    boxShadow: "0 3px 4px rgba(1, 1, 1, .3)",
    fontSize: "18px",
    fontFamily: '"Noto Sans", "Helvetica Neue", "Helvetica, Arial", "sans-serif"'
  };

  const commonSvgStyle = {
    height: "22px",
    width: "auto",
    paddingLeft: "15px"
  };

  const homeNavButtons: any = [
    {
      props: {
        contentText: "SMTLIB Tutorial",
        btnStyle: commomBtnStyle,
        svgStyle: commonSvgStyle,
        onClick: () => console.log(`${homeNavButtons[0].props.contentText} was clicked`),
        iconHTMLTag: bookSvg
      }
    },
    {
      props: {
        contentText: "Programming cvc5",
        btnStyle: commomBtnStyle,
        svgStyle: commonSvgStyle,
        onClick: () => console.log(`${homeNavButtons[1].props.contentText} was clicked`),
        iconHTMLTag: laptop
      }
    },
    {
      props: {
        contentText: "Test cvc5",
        btnStyle: commomBtnStyle,
        svgStyle: commonSvgStyle,
        onClick: () => console.log(`${homeNavButtons[2].props.contentText} was clicked`),
        iconHTMLTag: flaskVial
      }
    }
  ];
  console.log(homeNavButtons[0].props);
  return (
    <main className="homeMainContent">
      <Header />
      <img className="mainContentLogo" alt="cvc5 logo" src={logo} />
      <div className="btnSection-wrapper">
        <div className="btnsSection">
          {homeNavButtons.map((button: any, index: number) => (
            <Button
              key={"homeBtn" + index}
              onClick={button.props.onClick}
              contentText={button.props.contentText}
              btnStyle={button.props.btnStyle}
              svgStyle={button.props.svgStyle}
              svg={button.props.iconHTMLTag}
            />
          ))}
        </div>
      </div>
      <footer className="homeFooter"></footer>
    </main>
  );
};

export default Home;
