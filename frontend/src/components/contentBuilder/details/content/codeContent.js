import { CodeSnippet, TextArea,FileUploader } from 'carbon-components-react';
import {RowDelete16} from "@carbon/icons-react";
import { useState } from 'react';

export const CodeContent  =({id,data,setData})=> {
    const [value, setValue]= useState("");

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