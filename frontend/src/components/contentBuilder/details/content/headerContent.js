import "./content.css"
import { TextInput} from 'carbon-components-react';
import { useState, useEffect } from "react";

export const HeaderContent =({id,data,setData})=> {
    const [value, setValue]= useState("");
    useEffect(() => {
        if(data.get(id)!=null){
            setValue(data.get(id));
        }
    }, [])

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
                            if(event.target.value.length<50){
                                setValue(event.target.value)
                                const tempData = data;
                                tempData.set(id,event.target.value)
                                setData(tempData);
                                console.log(tempData)
                            }
                        
                        } 
                            
                }/>
            </label>
        </div>
    )
}