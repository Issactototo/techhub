import React from 'react'
import { Button } from 'carbon-components-react';
import {HeaderTemplate,HeadingBar} from "../components"
import "./template.css";
export function MainTemplate(props) {
  return (
    <div className="background">
        <div className="header" />
          <HeadingBar/>
          <HeaderTemplate/>
          <main>
            {props.children}
          </main>
    </div>
  )  
}
