import {RowDelete16} from "@carbon/icons-react";
import { CodeSnippet, Tile,TextInput } from 'carbon-components-react';
import { useState } from 'react';

export const VideoContent  =({id,data,setData})=> {
    const [value, setValue]= useState("");

    return(
        <div className="externalContentBox">
            <Tile 
                className="imageContent"
            >
                <TextInput
                    helperText="Insert Youtube link"
                    placeholder="www.youtube.com/..."
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
                                    }} }
                    />
            </Tile>
            {//<RowDelete16/>
}
        </div>
    )
}