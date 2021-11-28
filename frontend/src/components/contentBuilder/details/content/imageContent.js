import {RowDelete16} from "@carbon/icons-react";
import { 
    Tile,
    FileUploader,
 } from "carbon-components-react";
import { useState } from "react";

export const ImageContent  =({id,data,setData})=> {
    const [value, setValue]= useState("");
    return(
        <div className="externalContentBox">
            <Tile className="imageContent">

            <FileUploader
                accept={[
                    '.jpg',
                    '.png'
                ]}
                buttonKind="primary"
                buttonLabel="Add files"
                filenameStatus="edit"
                iconDescription="Clear file"
                labelDescription="only .jpg files at 500mb or less"
                labelTitle="Upload"
                className="imageContent"
                onChange={event => 
                    {
                            setValue(event.target.value)
                            const tempData = data;
                            // tempData.set(id,event.target.value)
                            // setData(tempData);
                            // console.log("event")
                            console.log(event.target.files[0])
                    
                    } 
                        
            }/>
            </Tile>
        </div>
    )
}