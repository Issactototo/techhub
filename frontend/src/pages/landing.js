import React from "react";
import HongKongImage from "../data/images/HongKong.png"
import { Features } from "../data";
import { Tile, Button } from "carbon-components-react";
import { useNavigate } from "react-router";

import "./pages.css"

export function LandingPage(){
    const navigate = useNavigate();
    return (
        <div>
            <div className="upperBanner">
                <h1>Welcome to Tech Hub HK</h1>
            </div>
            <img src ={HongKongImage} alt="Hong Kong" className="banner"/>
            <div className="downBanner">
                <h2>A Tech Hub for 🇭🇰</h2>
                <div className="features">
                {
                    Features.map((feature)=>(
                        <div className="featureSection">
                            <Tile>
                                <div className="featureInsideTile">
                                    <h3 className="featureTitle">{feature.title}</h3>
                                    <p className="featureDescription">{feature.description}</p>
                                    <Button 
                                        className="featureButton"
                                        onClick={()=>{navigate(feature.link);window.scrollTo(0, 0)}}
                                    >
                                        Learn More</Button>
                                </div>
                            </Tile>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
}