import React from "react";
import { ClickableTile, Button } from "carbon-components-react";
import 'carbon-components/css/carbon-components.min.css';
import "./components.css";


export const HeadingBar = ({title}) =>{
    return (
        <div className="CenterFixedHeadingSection">
        {title}
    </div>
    );
}
