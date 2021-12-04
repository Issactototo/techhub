import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { convertData } from "../../../components";
import { Button } from "carbon-components-react";
import "./contentBuilder.css";
import { useNavigate } from "react-router";

export const PreviewPage = () => {
  //const cardSample = {title:"abc",description:"desciption"}
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isDataReady, setDataReady] = useState(false);
  const [data, setData] = useState([]);
  // const { DataMap, DataList } = state;
  useEffect(() => {
    console.log("eabgiab");
    console.log(state.DataList);
    for (const [key, value] of state.DataList.entries()) {
      console.log(key, value);
      const obj = JSON.parse(value);
      console.log("HERE");

      obj.data = state.DataMap.get(obj.id);
      console.log("PPPPPP");
      console.log(obj.data);
      setData((oldArray) => [...oldArray, obj]);
    }
    setDataReady(true);
  }, []);

  return (
    <div className="previewPage">
        <div className="displayToolsBar">
            <Button className="displayLeftButton"onClick={() => navigate(-1)}>Back</Button>
            <Button className="displayRightButton">Publish</Button>
        </div>
      {isDataReady ? (
        <div className="dispayContentBackground">
          {data.map((item, index) => {
            console.log("item");
            console.log(item);
            return convertData(item.type, item.data);
          })}
        </div>
      ) : (
        <p style={{ color: "white" }}>not ready</p>
      )}
      
    </div>
  );
};
