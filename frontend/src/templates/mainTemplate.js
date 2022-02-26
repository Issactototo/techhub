import React from 'react'
import { Button } from 'carbon-components-react';
import {HeaderTemplate} from "../components";
import { Footer } from '../components';
import "./template.css";
export function MainTemplate(props) {
  return (
    <div className="backgroundMain">
          <HeaderTemplate isLogin={props.isLogin} setIsLogin={props.setIsLogin}/>
          <div className="main">
            {props.children}
          </div>
          <Footer/>
    </div>
  )  
}
