import React, { useState, useEffect } from "react";
import "./tutorial.css";
import { HeadingBar, CategorySelectBar } from "../../components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { getBlogsByCategory } from "../../functions/api/oracle/getBlogs";
import { Loading, Tile,Tag, ClickableTile, Button } from "carbon-components-react";

export const TutorialCategoryPage = ({ setTempEditPath, isLogin }) => {
  //const cardSample = {title:"abc",description:"desciption"}
  const { category } = useParams();
  const [level, setLevel] = useState("Beginner");
  const [buttonlevel, setButtonLevel] = useState("Beginner");
  const [data, setData] = useState("");
  const [displayData, setDisplayData] = useState("");
  const [isDataReady, setDataReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getBlogsByCategory({ category: category });
      response = await response;
      console.log(response);
      setData(response.data);
      setDisplayData(response.data)
      setDataReady(true);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="headingTemplate">
      {isDataReady ? null : <Loading />}
      <HeadingBar title={category} />
      <div className="BackgroundCategoryTemplate">
        <div className="selectLevelBar">
          <CategorySelectBar
            setLevel={setLevel}
            setButtonLevel={
              setButtonLevel
            }
            data={data}
          setDisplayData ={setDisplayData}
          />
          {isLogin ? (
            <Button
              className="initBlogButton"
              onClick={() => {
                setTempEditPath([category, buttonlevel]);
                navigate("../contentBuilder");
              }}
            >
              Create {buttonlevel}
            </Button>
          ) : null}
        </div>
        <hr />

        
          {displayData === "" ? (
            <p className="whiteText">Loading Blogs</p>
          ) : (
            <>
           
              {displayData.length != 0 ? (
                 <div className="cateogriesContainer">
                <div className="blogsTable">
                  {displayData.map((item, index) => (
                    <>
                      <ClickableTile className="blogCard">
                        <div>
                          <Tag className="blogCardLevel">{item[1]}</Tag>
                          <br />
                          <div className="blogCardTitleDiv">
                          <div className="blogCardTitle">
                        
                          {item[2]}
                          </div>
                          </div>
                          <br />
                          <div className='blogCardBottom'>
                          <p className="blogCardBottomText">{( item[3].split(",")[0])}</p>
                          <p className="blogCardBottomText">{(item[0])}</p>
                          </div>
                          </div>
                      </ClickableTile>
                    </>
                  ))}
                </div></div>
              ) : (
                <div className="categoryNodata">
                  <p className="whiteText">There are no data at this moment</p>
                </div>
              )}
            </>
          )}
        
      </div>
    </div>
  );
};
