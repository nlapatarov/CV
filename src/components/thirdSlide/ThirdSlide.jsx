import React from "react";
import "./thirdSlide.scss";
import Header from "../header/Header";
import { FiPhoneCall } from "react-icons/fi";
import { SiLinkedin, SiGmail } from "react-icons/si";
import { GrFacebook } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function ThirdSlide() {
  return (
    <div className="thirdSlide">
      <Header />
      <div className="info">
        <div className="hobies">
          <h3>HOBIES</h3>
          <ul>
            <li>Playing football</li>
            <li>Swimming</li>
            <li>Kayaking</li>
            <li>Running</li>
          </ul>
        </div>

        <div className="dividingLine"></div>

        <div className="contact">
          <h3>CONTACT</h3>
          <ul>
            <li>
              <FiPhoneCall className="icons" /> +359896869876
            </li>

            <li>
              <GrFacebook className="icons" />
              <a
                href="https://www.facebook.com/nikolay.lapatarov.92"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <SiLinkedin className="icons" />
              <a
                href="linkedin.com/in/nikolay-lapatarov-74856b221"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <FaGithub className="icons" />
              <a
                href="https://github.com/nlapatarov"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <SiGmail className="icons" /> nlapatarov92@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="myProjects">
        <h3>My Projects</h3>
        <ul>
          <li>
            <a
              href="https://nlapatarov.github.io/myTodoList/"
              target="_blank"
              rel="noreferrer"
            >
              Todo List
            </a>
            <p>
              In this project i have used React Function Components and
              useState, useEffect, useRef Hooks. For styling i have used plain
              CSS. All Todo's are saved in the Local Storage
            </p>
          </li>
          <li>
            <a
              href="https://nlapatarov.github.io/react-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              React Portfolio
            </a>
            <p>
              In this project i have used React Function Components. For styling
              i have used SASS
            </p>
          </li>
          <li>
            <a
              href="https://github.com/nlapatarov/Exercises"
              target="_blank"
              rel="noreferrer"
            >
              Exercises
            </a>
            <p>All my exercises that I did during my self-study </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ThirdSlide;
