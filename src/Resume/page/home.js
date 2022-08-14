import React from "react";
import Typical from "react-typical";
import pic1 from "./2017NON.jpg";
import pic2 from "./fading.png";
import pic3 from "./racing.jpg";
import pic4 from "./Tournament.jpg";
import "../main/homes.css";

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
      }}
    >
      <div className="loop">
        <Typical
          className={"welcomeLoop"}
          steps={[
            "Welcome",
            1000,
            "To",
            1000,
            "My",
            1000,
            "Experiences",
            1000,
            "and",
            1000,
            "Educations",
            1000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
      <div className="summary-prof"></div>
      <div className="education">
        <span>
          <h2>Education</h2>
          <br />
          <ul>
            <li>
              <strong>Seneca College</strong>, Advance Diploman, Computer
              Science, Canada (Present)
              <li>
                <strong>Kaplan International School</strong>, Pathway English,
                English Language, New Zealand (2020)
              </li>
              <li>
                <strong>ICL BUSSINESS INTERNATIONAL</strong>, IELTS ADVANCED,
                New Zealand (2021)
              </li>
              <li>
                <strong>Rangsit University</strong>, Bachelor's Degree,
                COM-ARTS, Thailand (2019)
              </li>
            </li>
          </ul>
        </span>
        <br />
        <div className="experiences">
          <span>
            <h2>Job Experiences</h2>
            <br />
            <ul>
              <li>Dota2, Thailand, Professional E-Sport Player(8 Years)</li>
              <li>
                Bangkapi-Pokpand, Thailand, Assistant Manager (4 Years)
                <br />
                <li>
                  National-Housing-Authority, Thailand, Editor, Graphic Designer
                  (6 Months)
                </li>
                <li>
                  Imperfect FreshEats, Toronto, Supervisor (8 Months)
                  <li>MadMex NewMarket, Auckland, Supervisor (8 Months)</li>
                </li>
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="{pic4}">
            <img src={pic1} className={"displayprofile"} alt={"non"} />
            <img src={pic2} className={"displayprofile"} alt={"non"} />
            <img src={pic3} className={"displayprofile"} alt={"non"} />
            <img src={pic4} className={"displayprofile"} alt={"non"} />
          </a>
        </div>
      </div>
    </div>
  );
}
