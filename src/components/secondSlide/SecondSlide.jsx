import React from "react";
import Header from "../header/Header";
import "./secondSlide.scss";

function SecondSlide() {
  return (
    <div className="secondSlide">
      <Header />
      <div className="mainContainer">
        <h3>Who I am and what I want to achieve in my life</h3>
        <div className="content" >
          My name is Nikolay. I am 28 year's old. Since 2015 I work as an
          investigating police officer. In 2019/2020 I successfully completed
          two courses in computer education center Progress in Web Design that
          included studying HTML, CSS and JavaScript. One of the most important
          things I learned during the courses was self-learning. So after
          completing both courses I continued my self-study by learning new
          technologies like JS library - React. I also started studying another
          JS library - Redux as of today I have a basic knowledge of it. From
          about three months I took unpaid leave to have more time to upgrade my
          knowledge and to achieve my goal which is to find a job as a Junior
          Front End developer.
        </div>
      </div>

      <p className="ownName">Nikolay</p>
    </div>
  );
}

export default SecondSlide;
