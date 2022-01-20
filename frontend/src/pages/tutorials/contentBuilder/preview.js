import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { convertData } from "../../../components";
import {
  Button,
  Loading,
  TextInput,
  Modal,
  Tile,
} from "carbon-components-react";
import { PageFirst16, PageLast16 } from "@carbon/icons-react";
import "./contentBuilder.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { addImagesToData, getBlogById, submit } from "../../../functions";
import { HeadingBar } from "../../../components";
import { AvatarLogo } from "../../../data/images";
import { userGetImage } from "../../../functions";
import Cookies from "js-cookie";


export const PreviewPage = () => {
  //const cardSample = {title:"abc",description:"desciption"}
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDataReady, setDataReady] = useState(false);
  const [isSuccessStored, setIsSuccessStored] = useState(true);
  const [isSettingTitle, setIsSettingTitle] = useState(true);
  const [title, setTitle] = useState("");
  const [blogInfo, setBlogInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  // const { DataMap, DataList } = state;

  const handleClickSubmit = async () => {
    setIsLoading(true);
    const submissionResponse = await submit({
      email: Cookies.get("userEmail"),
      username: Cookies.get("userEmail"),
      category: state.tempEditPath[0],
      level: state.tempEditPath[1],
      data: data,
      title: title,
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
      if (!state) {
        try {
          console.log(id);
          const response = await getBlogById({ id });
          const contentData = response.data[0][4];
          console.log("response.data[0][0]");
          const profileImageResponse = await userGetImage({email:response.data[0][0]});
          console.log('profileImage')
          console.log(profileImageResponse)
          
          setBlogInfo({
            email: response.data[0][0],
            username: response.data[0][1],
            category: response.data[0][2],
            level: response.data[0][3],
            title: response.data[0][5],
            image:(profileImageResponse !=='error')?profileImageResponse.data:null
          });
          
        //   if(profileImageResponse !=='error'){
        //     blogInfo.image = profileImageResponse.data;
        //   setBlogInfo(blogInfo)
        //   console.log('blogInfo.image')
        //   console.log(blogInfo)
        // }
          // convertImage
          const imagedAddedData = await addImagesToData(
            JSON.parse(contentData)
          );
          setData(imagedAddedData);
        } catch {
          //return error page
        }
      } else {
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
      <div className="BackgroundVerticalTemplate">
      <HeadingBar title={state ? title : blogInfo.title} />
      <div className="previewPage">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {state ? (
              <Modal
                open={isSettingTitle}
                buttonTriggerText=""
                primaryButtonText="Submit"
                onRequestSubmit={() => {
                  if (title.length > 10) setIsSettingTitle(false);
                }}
              >
                <TextInput
                  labelText={<p style={{ color: "black" }}>Title</p>}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  helperText="At least 10 characters"
                />
              </Modal>
            ) : null}
            {state ? (
              <div className="displayToolsBar">
                <Button
                  className="displayLeftButton"
                  onClick={() => navigate(-1)}
                >
                  <PageFirst16 />
                  Back{" "}
                </Button>
                <Button
                  className="displayRightButton"
                  onClick={handleClickSubmit}
                >
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
            ) : (
              <Loading />
            )}
            {state ? null : (
              <Tile className="blogInfoSection">
                {blogInfo.image ? (
                  <img className="blogInfoSectionProfile" src={blogInfo.image} />
                  
                ) : (
                  <AvatarLogo
                    fill="blue"
                    className="blogInfoSectionProfile"
                  />
                  
                )}
                <p>{blogInfo.username}</p>
              </Tile>
            )}
          </>
        )}
      </div>
    </div>
    </div>
  );
};
