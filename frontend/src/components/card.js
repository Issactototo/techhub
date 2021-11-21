import React from "react";
import { ClickableTile, Button } from "carbon-components-react";
import 'carbon-components/css/carbon-components.min.css';
import "./components.css";
import { useNavigate } from 'react-router-dom';



export const Card = ({card} ) =>{
    const navigate = useNavigate();

    return (
        <div >
            <ClickableTile className="tile">
                <h3>{card.title}{card.icon}</h3>
                <div className="content">
                    <p>{card.description}</p>
                </div>
                <div className="buttonClass">
                <Button onClick={()=>{navigate(card.link);window.scrollTo(0, 0)}}>Learn {card.title} </Button>
                </div>
            </ClickableTile>
        </div>
    );
}