import React from "react";
import "./about.css";
import { HeadingBar } from "../../components";
import DeveloperImage from "../../data/images/Developer.jpeg"
export const AboutBlogPage = () => {
  //const cardSample = {title:"abc",description:"desciption"}
  return (
    <div className="headingTemplate">
      <HeadingBar title="About this blog" />
      <div className="BackgroundVerticalTemplate">
        <div className="BackgroundVerticalWidthLimit80Template" id="BackgroundVerticalWidthLimit80Template">
          <div className="quote">
              <div className="quoteContent">
            "Developer, Developer, Developer" 
            </div>
            <div  className="quoteAuthor">,Steve Ballmer</div>
          </div>
          <div className="aboutBlogContent">
            This blog is intended to provide FREE programming tutorials to
            HKers. We believe that tutorials should be free and open to
            everyone. We deploy the website on free tier software and it's open
            source! Enjoy!
          </div>
        </div>
        <br/>
        <img src={DeveloperImage} alt ="developer" id="developerImage" />
      </div>
    </div>
  );
};
