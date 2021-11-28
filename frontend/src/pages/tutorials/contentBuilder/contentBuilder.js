
import React from "react";
import { MainContentBuilder } from "../../../components";
import { useState } from "react";

export const ContentBuilderPage = ({tempEditPath}) =>{
    const [data, setData]  = useState(new Map([]));
    //const cardSample = {title:"abc",description:"desciption"}
    return (
        <MainContentBuilder 
            tempEditPath = {tempEditPath}
            setData={setData}
            data={data}
            
        />
    );
}


