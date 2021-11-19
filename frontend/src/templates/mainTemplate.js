import React from 'react'
import { Button } from 'carbon-components-react';
import {HeaderTemplate} from "../components"

export function MainTemplate(props) {
  return (
    <div>
        <HeaderTemplate className="header"/>
        <main>
        
        <Button>ABC</Button>
        {props.children}
        </main>
    </div>
  )  
}
