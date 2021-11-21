import React from "react";
import "./about.css"
import { HeadingBar } from "../../components";
import TeamLogo from "../../data/images/Team.jpeg"
export const AboutTeamPage = () =>{
    //const cardSample = {title:"abc",description:"desciption"}
    return (
        <div className="headingTemplate">
            <HeadingBar title="About the Team" /> 
            <div className="BackgroundVerticalTemplate">
                <div className="aboutMainSection">
                    <div className="halfScreen">
                        <img src={TeamLogo} className="mainImage" alt="team"/>
                    </div>
                    <div  className="halfScreen">
                        <p>The team is </p>
                    </div>
                </div>
            </div>
        </div>
    );
}