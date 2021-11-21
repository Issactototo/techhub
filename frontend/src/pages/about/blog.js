import React from "react";
import "./about.css"
import { HeadingBar } from "../../components";
export const AboutBlogPage = () =>{
    //const cardSample = {title:"abc",description:"desciption"}
    return (
        <div className="headingTemplate">
            <HeadingBar title="About this blog" /> 
            <div className="BackgroundVerticalTemplate">
                
                What is the blog 
            </div>
        </div>
    );
}