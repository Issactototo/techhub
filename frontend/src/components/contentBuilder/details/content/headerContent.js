import "./content.css"
import { TextInput} from 'carbon-components-react';
import { useState } from "react";
import {RowDelete16} from "@carbon/icons-react";


export const HeaderContent =()=> {
    const [value, setValue]= useState("");

    return(
        <div className="headerContentBox">

           
            <label>
                <TextInput 
                type="text" 
                name="name" 
                className="contentHeader" 
                value = {value}
                helperText="Header"
                onChange={event => 
                        {
                            if(event.target.value.length<26)setValue(event.target.value)} 
                        }/>
            </label>
        </div>
    )
}