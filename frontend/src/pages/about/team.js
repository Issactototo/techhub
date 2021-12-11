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
                        <p className="teamSubHeader"> Contributor </p>
                        <br/>
                        <p className="teamContent">Create a pull request on Github</p>
                        <br/>
                        <p className="teamSubHeader"> Content Creator </p>
                        <br/>
                        <p className="teamContent">Join us as a content creator and share your knowlege on the other subpage</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}