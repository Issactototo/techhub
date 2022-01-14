import React from "react";
import "./about.css";
import { HeadingBar } from "../../components";
import TeamLogo from "../../data/images/Team.jpeg";
export const AboutTeamPage = () => {
  //const cardSample = {title:"abc",description:"desciption"}
  return (
    <div className="headingTemplate">
      <HeadingBar title="About the Team" />
      <div className="BackgroundVerticalTemplate">
        <div className="aboutMainSection">
          <div className="halfScreen">
            <img src={TeamLogo} className="mainImage" alt="team" />
          </div>
          <div className="halfScreen">
            <>
              <p className="teamSubHeader"> Contributor </p>
              <p className="teamContent">
                Email us at{" "}
                <a href="mailto:hktechhub2022@gmail.com">
                  hktechhub2022@gmail.com
                </a>
              </p>
            </>
            <>
              <p className="teamSubHeader"> Content Creator </p>

              <p className="teamContent">
                Join us as a <a href="../aboutJoin">content creator</a> and
                share your knowlege on the other subpage
              </p>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
