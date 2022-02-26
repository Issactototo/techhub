
import React,{useEffect} from "react";
import { MainContentBuilder } from "../../../components";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import Cookies from 'js-cookie'

export const ContentBuilderPage = ({tempEditPath}) =>{
    const [data, setData]  = useState(new Map([]));
    const { category,level } = useParams();
    const navigate = useNavigate();
    //const cardSample = {title:"abc",description:"desciption"}
    useEffect(() => {
        const cookiesPrevStateMap = Cookies.get("prevStateMap");
        if(cookiesPrevStateMap!=null){
            console.log(JSON.parse(cookiesPrevStateMap))
            const cookiesPrevMapJson = JSON.parse(cookiesPrevStateMap)
            const cookiesPrevMap = new Map(Object.entries(cookiesPrevMapJson));
            console.log(cookiesPrevMap)
            setData(cookiesPrevMap);
            console.log("data")
            console.log(data)
        }
    },[])
    function navigateToPreview(DataMap,DataList){
        navigate('/preview',  { state: { DataMap: DataMap, DataList: DataList, tempEditPath: tempEditPath, title:"title", isPreview:true} });
    }
    return (
        
        <MainContentBuilder 
            tempEditPath = {[category,level]}
            setData={setData}
            data={data}
            // navigateToPreview={()=>setIsSettingTitle(true)}
            navigateToPreview={navigateToPreview}
        />
    );
}


