import React, { useState, useEffect } from "react";
import "./tutorial.css";
import { HeadingBar, CategorySelectBar } from "../../components";
import { useParams } from "react-router-dom";
import { Button } from "carbon-components-react";
import { useNavigate } from "react-router";
import { getBlogsByCategory } from "../../functions/api/oracle/getBlogs";
import { Loading, Tile } from "carbon-components-react";

export const TutorialCategoryPage = ({ setTempEditPath, isLogin }) => {
  //const cardSample = {title:"abc",description:"desciption"}
  const { category } = useParams();
  const [level, setLevel] = useState("Beginner");
  const [buttonlevel, setButtonLevel] = useState("Beginner");
  const [data, setData] = useState("");
  const [isDataReady, setDataReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getBlogsByCategory({ category: category });
      response = await response;
      console.log(response);
      setData(response.data);
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
            setButtonLevel={setButtonLevel}
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

        <>
          {data === "" ? (
            <p className="whiteText">Loading Blogs</p>
          ) : (
            <>
              {data.length != 0 ? (
                <div className="blogsTable">
                  {data.map((item, index) => (
                    <>
                      <Tile className="blogCard">
                        <div>
                          <p className="blogCardLevel">{item[1]}</p>
                          <br />
                          <p className="blogCardTitle">
                            hjwJVDBIBIFABIFABFABIOUFABFUIOAB
                          </p>
                          <br />
                          <p className="blogCardBottom">{(item[0], item[3])}</p>
                        </div>
                      </Tile>
                      {index % 3 == 2 ? null : <div class="break"></div>}
                    </>
                  ))}
                </div>
              ) : (
                <div className="categoryNodata">
                  <p>There are no data in this moment</p>
                </div>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
};
