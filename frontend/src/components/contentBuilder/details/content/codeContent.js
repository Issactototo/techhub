import {  TextArea } from 'carbon-components-react';
import { useState, useEffect } from 'react';

export const CodeContent  =({id,data,setData})=> {
    const [value, setValue]= useState("");

    useEffect(() => {
        if(data.get(id)!=null){
            setValue(data.get(id));
        }
        console.log("data.get(id)")
        console.log(data.get(id))
    }, [])

    return(
        <div className="textContentBox">
            <TextArea
                labelText="Text area label"
                placeholder=""
                value = {value}
                helperText="Code Snippet"
                className="textContent"
                onChange={event => 
                    {
                    setValue(event.target.value)
                    const tempData = data;
                    tempData.set(id,event.target.value)
                    setData(tempData);
                    console.log(tempData)}
                }
            />
        </div>
    )
}