import { TextInput} from 'carbon-components-react';
import {RowDelete16} from "@carbon/icons-react";

import { useState,useEffect } from "react"

export const SubHeaderContent =({id,data,setData})=> {
    const [value, setValue]= useState("");
    useEffect(() => {
        if(data.get(id)!=null){
            setValue(data.get(id));
        }
    }, [])
    return(
        <div className="subHeaderBox">
            <label>
                <TextInput 
                type="text" 
                name="name" 
                className="contentSubHeader" 
                value = {value}
                helperText="SubHeader"
                onChange={event => 
                        {
                            if(event.target.value.length<60){
                                setValue(event.target.value)
                                const tempData = data;
                                tempData.set(id,event.target.value)
                                setData(tempData);
                                console.log(tempData)
                            }} 
                }/>
                        
            </label>
            
        </div>
    )
}