import React from "react";
import "./tutorial.css"
import {HeadingBar} from "../../components"
import { useParams } from "react-router-dom";
import { Button } from "carbon-components-react";
import { useNavigate } from "react-router";


export const TutorialCategoryPage = ({setTempEditPath}) =>{
    //const cardSample = {title:"abc",description:"desciption"}
    const { category } = useParams();
    const navigate = useNavigate();

    return (
        <div className="headingTemplate">
            <HeadingBar title={category}/> 
            <div className="BackgroundDisplayTemplate">
                <Button
                onClick={
                    ()=>
                    {
                        setTempEditPath([category,"123456u","123456","123456u"]);
                        navigate("../contentBuilder")
                    }
                }/>
            </div>
        </div>
    );
}