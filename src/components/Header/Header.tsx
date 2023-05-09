import React, { useState } from "react";
import "./Header.css";
import logo from "../../utils/imgs/cvc5_logo.png";
import gitHub from "../../services/shared/assets/github.svg";
import externalLink from "../../services/shared/assets/external-link.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [highlightedNavItem, setHighlightedNavItem] = useState("");

  const listItems = [
    { contentText: "SMTLIB Tutorial", link: "smtlibTutorial" },
    { contentText: "Programming cvc5", link: "programmingCvc5" },
    { contentText: "Test cvc5", link: "testCvc5" }
  ];

  return (
    <header className="header">
      <img className="headerLogo" alt="cvc5 logo" src={logo} />
      <nav className="topNavigation">
        {listItems.map((item, index) => (
          <Link key={"topNavLink" + index} to={item.link}>
            <li
              className={`listItem ${
                item.contentText === highlightedNavItem ? "highlightedNavItem" : null
              } `}
              key={"topNavItem" + index}
              onClick={() => setHighlightedNavItem(item.contentText)}
            >
              {item.contentText}
            </li>
          </Link>
        ))}
      </nav>
      <span className="listItem githubExternalLink">
        <img
          src={gitHub}
          style={{ height: "18px", width: "auto", paddingRight: "8px" }}
          alt="github svg icon"
        ></img>
        Github
        <img
          src={externalLink}
          style={{ height: "15px", width: "auto", paddingLeft: "8px" }}
          alt="external link svg icon"
        ></img>
      </span>
    </header>
  );
};

export default Header;
