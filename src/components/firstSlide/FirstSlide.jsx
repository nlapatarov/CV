import React from "react";
import "./firstSlide.scss";
import Header from "../header/Header";
import { FaHome, FaSass, FaReact } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";
import { MdSchool } from "react-icons/md";
import { SiCss3, SiHtml5, SiJavascript, SiRedux } from "react-icons/si";

function FirstSlide() {
  return (
    <div className="firstSlide">
      <Header />
      <div className="mainContainer">
        <div className="leftContainer">
          <div className="personalInfo">
            <h3>About Me</h3>
            <p>Born: 21.12.1992</p>
            <p>
              {" "}
              <FaHome className="icons" /> Hometown: Yambol
            </p>
            <p>
              {" "}
              <ImLocation2 className="icons" /> Place of residence : Sofia
            </p>
          </div>

          <div className="education">
            <h3>Education</h3>
            <h4>
              <MdSchool className="icons" /> High School
            </h4>
            <p>Professional Tech High School "Ivan Rainov"</p>
            <p>Yambol, Bulgaria - 2007-2011</p>

            <h4>
              <MdSchool className="icons" /> Bachelor Degree
            </h4>
            <p>Academy of the Ministry of Interior</p>
            <p>Sofia, Bulgaria - 2011-2015</p>
          </div>

          <div className="courses">
            <h3>Courses</h3>
            <p>
              <a
                href="https://progressbg.net/"
                target="_blank"
                className="courseName"
              >
                Progress
              </a>
            </p>
            <ul>
              <li>Web Design: HTML, CSS, JS</li>
              <li>Web Design: HTML, CSS, JS - Advanced</li>
            </ul>
          </div>
        </div>

        <div className="dividingLine"></div>

        <div className="rightContainer">
          <div className="techSkills">
            <h3>Tech Skills</h3>
            <ul>
              <li>
                {" "}
                <SiHtml5 className="icons" /> HTML 5
              </li>
              <li>
                {" "}
                <SiCss3 className="icons" /> CSS 3
              </li>
              <li>
                <SiJavascript className="icons" />
                JavaScript
              </li>
              <li>
                <FaSass className="icons" />
                SASS
              </li>
              <li>
                <FaReact className="icons" />
                React
              </li>
              <li>
                <SiRedux className="icons" />
                Redux
              </li>
            </ul>
          </div>

          <div className="qualities">
            <h3>Qualities</h3>
            <ul>
              <li>Responsible</li>
              <li>Reliable</li>
              <li>Ambitious</li>
              <li>Organized</li>
              <li>Fast learner</li>
              <li>Team player</li>
              <li>Social</li>
            </ul>
          </div>

          <div className="languages">
            <h3>Languages</h3>
            <ul>
              <li>Bulgarian - native language</li>
              <li>English - good writing and speaking</li>
              <li>Russian - basic knowledge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;
