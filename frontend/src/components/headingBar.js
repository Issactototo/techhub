import React from "react";
import { ClickableTile, Button } from "carbon-components-react";
import 'carbon-components/css/carbon-components.min.css';
import "./components.css";


function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const HeadingBar = ({title}) =>{
    return (
        <div className="CenterFixedHeadingSection">
        {Capitalize(title)}
    </div>
    );
}
