import React, {useState} from "react";
import "./tutorial.css"
import {HeadingBar,CategorySelectBar} from "../../components";
import { useParams } from "react-router-dom";
import { Button } from "carbon-components-react";
import { useNavigate } from "react-router";


export const TutorialCategoryPage = ({setTempEditPath, isLogin}) =>{
    //const cardSample = {title:"abc",description:"desciption"}
    const { category } = useParams();
    const [level, setLevel ] = useState("Beginner");
    const [buttonlevel, setButtonLevel ] = useState("Beginner");
    const [ data, setData ] = useState("");
    const navigate = useNavigate();

    return (
        <div className="headingTemplate">
            <HeadingBar title={category}/> 
            <div className="BackgroundCategoryTemplate">
                <div className="selectLevelBar">
                    <CategorySelectBar setLevel={setLevel} setButtonLevel={setButtonLevel}/>
                    {
                    isLogin
                        ?
                        <Button
                        className="initBlogButton"
                        onClick={
                            ()=>
                            {
                                setTempEditPath([category,buttonlevel]);
                                navigate("../contentBuilder")
                            }
                        }>Create {buttonlevel}
                        </Button>:null
                    }
                </div>

                <div>
                    {data===""
                        ?<p className="whiteText">There are no data in this moment</p>
                        :
                        <div>{data}</div>
                    }
                    
                </div>
            </div>
        </div>
    );
}