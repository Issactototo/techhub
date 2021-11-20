import React from "react";
import { CategorySection } from "../../templates";
import {Card} from "../../components"
import {Categories} from "../../data"
import "./tutorial.css"

export const TutorialMenuPage = () =>{
    //const cardSample = {title:"abc",description:"desciption"}
    return (
        <div className="BackgroundDisplayTemplate">
              {Categories.map((category) => (<Card card={category} /> ))}
        </div>
    );
}