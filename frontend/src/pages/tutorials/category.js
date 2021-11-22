import React from "react";
import "./tutorial.css"
import {HeadingBar} from "../../components"
import { useParams } from "react-router-dom";


export const TutorialCategoryPage = () =>{
    //const cardSample = {title:"abc",description:"desciption"}
    const { category } = useParams();

    return (
        <div className="headingTemplate">
            <HeadingBar title={category}/> 
            <div className="BackgroundDisplayTemplate">
            </div>
        </div>
    );
}