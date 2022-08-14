import React from "react";
import Typical from "react-typical";
import "./homes.css";
import profilepic from "./non2.jpg";
import "@fontsource/arima-madurai";

export default function Indexmain() {
  return (
    <div className="non">
      <span className="fullname">Nonthachai Plodthong 👾</span>
      <div className="picture2">
        {" "}
        <img src={profilepic} className={"displayprofile"} alt={"non"} />
      </div>
      <div className={"profile-optio2"}>
        <div clasName="profile-option"></div>{" "}
        <Typical
          className={"loopName"}
          loop={Infinity}
          steps={[
            "FINAL ASSESSMENT 🤖",
            1000,
            "WEB222 🕶",
            1000,
            "FULLSTACK DEVELOPER 🤖",
            1000,
            "SENECA COLLEGE 🕶",
            1000,
          ]}
        />
        <br />
        <button className={"btn primary-btn"}> Resume </button>
        {"\u00a0\u00a0"}
        <br />
      </div>

      <div className="optional-section">
        {" "}
        <h2>About me</h2>
        <span className="aboutme">
          <p>
            Hi everyone, My name is Nonthachai Plodthong. I'm a international
            student at Seneca College in Computer Science on third semesters
            right now. My character are friendly, willing to learn new stuffs,
            massive of ambitions, also I always work in huge amount of pressure
            when I was competitived as E-sport player, and multi-tasking and
            manage working properly
            <br />
          </p>
        </span>
      </div>
      <div className="aboutme2">
        <h2>Basic Information</h2>

        <span>
          DATE OF BIRTH: 12 AUGUST 1995 <br />
          AGE: 28 <br />
          Language: English, Thai(Native), Chinese
        </span>
      </div>
      <div className="reflection">
        <h2>Reflection</h2>
        <span>
          <p id="paragraph-1">
            First of all, WEB222 is good foundation for who is starting to do
            web development like me. the course cover all basic HTML, CSS,
            Javsscipt and basic DOM. I have learnt how to validate input from
            user, how to create table and more. <br />
            <br />
          </p>
          <p id="paragraph-2">
            On the other hand, this course also provide notes for read and guide
            for who is new for web development.
            <a href="https://web222.ca/">WEB222 website</a> also include all
            information for who are interesting in web development include
            stylesheet as well. The conception of Web222 are providing various
            of knowledge as I mentioned above, but I would say put more focus on
            Javascript of Jquery will be better for student who really want to
            do web development because developer not do just HTML and CSS but
            need Javascript to make website succeeded.
          </p>
          <p id="p3">
            Finally, I have great experiences from this course to create my
            foundation of my career in the future. And also, to be clear of
            web222 is not hard if you understand the concept of DOM and tags in
            html and Javascript. Talk about Javascript will be more tough in the
            next up coming course which is web700 that provide me to do lots of
            thing such as advance library and many more.
          </p>
        </span>
      </div>
    </div>
  );
}

/*<div className="profile-main">

<div className="non">
         <span className="fullname">Nonthachai Plodthong 👾</span>
    <div className="profile1">
      <div className="profile-fullname2">
        <span className="fullname">Nonthachai Plodthong 👾</span>
        <div className="profile-loop">
          
        </div>
      </div>
      <img src={logo} className={"displayprofile"} alt={"non"} />
    </div>

      <div className={"profile-details-name"}>
        <span className={"primary-text"}>
          {" "}
          <span className={"highlighted-text"}>
            <span className="fullname">Nonthachai Plodthong 👾</span>
            <div className={"profile-picture"}>
              <div className={"profile-picture-background"}>
                <img src={logo} className={"logo"} alt={"non"} />
              </div>
            </div>
            <br />
            <h1>
              {" "}
              <Typical
                className={"loopName"}
                loop={Infinity}
                steps={[
                  "FINAL ASSESSMENT 🤖",
                  1000,
                  "WEB222 🕶",
                  1000,
                  "FULLSTACK DEVELOPER 🤖",
                  1000,
                  "SENECA COLLEGE 🕶",
                  1000,
                ]}
              />
              <br />
              <div className={"signature-word"}>
                DESIGN.{"\u00a0\u00a0"}BEST.{"\u00a0\u00a0"}IDEA.
                {"\u00a0\u00a0"}LOGIC.
              </div>
            </h1>
          </span>
        </span>
        <div className={"profile-option"}>
          <br />
          <button className={"btn primary-btn"}> Resume </button>
          {"\u00a0\u00a0"}
          
          <br />
        </div>
        
        <div className="summary">
        Summary
        </div>
      </div>
    </div>*/
