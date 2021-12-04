import { CodeSnippet, TextArea,FileUploader } from 'carbon-components-react';
import { useState, useEffect } from 'react';
export const TextContent =({id,data,setData})=> {
    const [value, setValue]= useState("1");

    useEffect(() => {
        if(data.get(id)!=null){
            setValue(data.get(id));
        }
    }, [])
    return(
        <div className="textContentBox">
            <TextArea
                labelText="Text area label"
                placeholder=""
                helperText="Text Box"
                className="textContent"
                value={value}
                onChange={event => 
                    {
                        setValue(event.target.value)
                        const tempData = data;
                        tempData.set(id,event.target.value)
                        setData(tempData);
                        console.log(tempData)
                    } 
            }/>
        </div>
    )
}