import React from "react";

import SideNavigationBar from "../../components/SideNavigationBar/SideNavigationBar";
import Header from "../../components/Header/Header";
import Prompt from "./Prompt";
import "./Index.css";

const TestCvc5 = () => {
  const navigationItems = [
    { contentText: "Freeform Editing" },
    { contentText: "Practical Examples" }
  ];

  return (
    <>
      <Header />
      <section className="testCvc5MainContent">
        <SideNavigationBar navigationItems={navigationItems} />
        <section className="promptSection">
          <h2 className="title-1">Freeform Editing</h2>
          <h3 className="title-2">Run cvc5 online</h3>
          <Prompt height="550px" width="1200px" editorHeight="250px" outputHeight="100px" />
        </section>
      </section>
    </>
  );
};

export default TestCvc5;
