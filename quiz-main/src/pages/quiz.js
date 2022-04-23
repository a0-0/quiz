import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import Question from "../components/question"

const Quiz = () => {
  return (
    <React.Fragment>
        <Header />
        <div className="content-wrapper" style={{ minHeight: "50vh"}}>
          <Question />
        </div>
        <Footer />
    </React.Fragment>
  );
};

export default Quiz;
