import { CodeSnippet, TextArea,FileUploader } from 'carbon-components-react';
import { useState } from 'react';
export const TextContent =({id,data,setData})=> {
    const [value, setValue]= useState("");
    return(
        <div className="textContentBox">
            <TextArea
                labelText="Text area label"
                placeholder=""
                helperText="Text Box"
                className="textContent"
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
        </div>
    )
}