import {RowDelete16} from "@carbon/icons-react";
import { 
    Tile,
    FileUploader,
 } from "carbon-components-react";
import { useState, useEffect } from "react";

export const ImageContent  =({id,data,setData})=> {
    const [value, setValue]= useState("");
    const [complete, setComplete]= useState(false);

    useEffect(() => {
        if(data.get(id)!=null){
            setValue(data.get(id));
            setComplete(true);
        }
        console.log("data.get(id)")
        console.log(data.get(id))
    }, [])
    return(
        <>
        {
            complete? 
            <div style={{
                display:"flex",
                justifyContent:"center", 
                alignItems:"center", 
                textAlign:"center",
                maxHeight:"40vh",
                width:"100%",
            }}> 

                <img src={value} className="image" alt={"preview"} style={{ objectFit: "cover" }} />
            </div>
            :
        
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
                    labelDescription={<div style={{diplay:"flex",justifyContent:"center",textAlign:"center"}}><>Images cannot be saved!! </><br/><>only .jpg files at 500mb or less. "</></div>}
                    labelTitle="Upload"
                    className="imageContent"
                    onChange={event => 
                        {
                                
                                
                                const reader = new FileReader();
                                console.log("fegsfnb")
                                reader.onloadend = () => {
                                    setValue(reader.result);
                                    console.log(reader.result)
                                    const tempData = data;
                                    tempData.set(id,reader.result)
                                    // setData(tempData);
                                };
                                reader.readAsDataURL(event.target.files[0]);

                                setComplete(true);
                        
                        } 
                            
                }/>
                </Tile>
                
            </div>
        }
        </>
        
    )
}

