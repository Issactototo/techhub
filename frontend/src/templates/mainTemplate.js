import React from 'react'
import { Button } from 'carbon-components-react';
import {HeaderTemplate} from "../components";
import "./template.css";
export function MainTemplate(props) {
  return (
    <div className="background">
          <HeaderTemplate isLogin={props.isLogin} setIsLogin={props.setIsLogin}/>
          <main className="main">
            {props.children}
          </main>
    </div>
  )  
}
