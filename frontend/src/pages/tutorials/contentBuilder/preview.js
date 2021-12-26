import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { convertData } from "../../../components";
import { Button, Loading } from "carbon-components-react";
import { PageFirst16, PageLast16 } from "@carbon/icons-react";
import "./contentBuilder.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { addImagesToData, getBlogById, submit } from "../../../functions";
import { HeadingBar } from "../../../components";

export const PreviewPage = () => {
  //const cardSample = {title:"abc",description:"desciption"}
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDataReady, setDataReady] = useState(false);
  const [isSuccessStored, setIsSuccessStored] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  // const { DataMap, DataList } = state;

  const handleClickSubmit = async () => {
    console.log("afkaof");
    setIsLoading(true);
    const submissionResponse = await submit({
      email: "123",
      username: "ToTO",
      category: state.tempEditPath[0],
      level: state.tempEditPath[1],
      data: data,
      title: "afeafeaefaefaefaefaefaefaefefa",
    });
    setIsLoading(false);
    if (submissionResponse === "error") {
      setIsSuccessStored(false);
    } else {
      setIsSuccessStored(true);
    }
  };

  useEffect(() => {
    //add here
    async function fetchMyAPI() {
    if(!state){

      try{
        console.log(id)
        const response = await getBlogById({id})
        const contentData = response.data[0][4]
        // convertImage
        const imagedAddedData = await addImagesToData(JSON.parse(contentData));
        setData(imagedAddedData)
      }catch{
        //return error page
      }
    }else{
    for (const [key, value] of state.DataList.entries()) {
      const obj = JSON.parse(value);
      obj.data = state.DataMap.get(obj.id);
      setData((oldArray) => [...oldArray, obj]);
    }
    
  
  }
  setDataReady(true);
}
fetchMyAPI();
  }, []);

  return (
    <div className="headingTemplate">
      <HeadingBar title={'state.title'} />
      <div className="previewPage">
        {isLoading ? <Loading /> : null}
        {state ? (
          <div className="displayToolsBar">
            <Button className="displayLeftButton" onClick={() => navigate(-1)}>
              <PageFirst16 />
              Back{" "}
            </Button>
            <Button className="displayRightButton" onClick={handleClickSubmit}>
              Publish
              <PageLast16 />
            </Button>
          </div>
        ) : null}
        {isDataReady ? (
          <div className="dispayContentBackground">
            {data.map((item, index) => {
              console.log("item");
              console.log(item);
              return convertData(item.type, item.data);
            })}
          </div>
        ) :  <Loading /> }
      </div>
    </div>
  );
};
