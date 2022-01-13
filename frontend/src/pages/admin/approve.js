import React, { useEffect, useState } from "react";
import { getPendingUsers } from "../../functions";
import {
  Loading,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
  Tag,
} from "carbon-components-react";
import { HeadingBar, ConfirmModal } from "../../components";
import { CheckmarkOutline20 } from "@carbon/icons-react";

export function ApprovePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isConfirm, setIsConfirm] = useState(false);
  useEffect(() => {
    async function fetchAPI() {
      const response = await getPendingUsers();
      setData(response);
      console.log("ffchijokp");
      setIsLoading(false);
    }
    fetchAPI();
  }, []);
  return (
    <div className="headingTemplate">
      <HeadingBar title="Approve New Users" />
      <div className="BackgroundVerticalTemplate">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="PendingTable">
            {isConfirm ? 
              <ConfirmModal
                title="Confirm!"
                text="Confirm to add this user?"
                closeOnPress={()=>setIsConfirm(false)}
                callback={()=>setIsConfirm(false)}
              />
             : null}
            {data !== [] ? (
              <StructuredListWrapper>
                <StructuredListHead>
                  <StructuredListRow head>
                    <StructuredListCell head></StructuredListCell>
                    <StructuredListCell head>Email</StructuredListCell>
                    <StructuredListCell head>Topic</StructuredListCell>
                    <StructuredListCell head>Reason</StructuredListCell>
                    <StructuredListCell head>Field</StructuredListCell>
                    <StructuredListCell head>Referred?</StructuredListCell>
                    <StructuredListCell head>Approve?</StructuredListCell>
                  </StructuredListRow>
                </StructuredListHead>
                <StructuredListBody>
                  {data.map((pendingUser, index) => {
                    return (
                      <StructuredListRow className="StructuredListRow">
                        <StructuredListCell noWrap>
                          {index + 1}
                        </StructuredListCell>
                        {pendingUser.map((item, itemIndex) => {
                          return (
                            <StructuredListCell>
                              <p className="PendingTableText">{item}</p>
                            </StructuredListCell>
                          );
                        })}
                        <StructuredListCell>
                          <CheckmarkOutline20
                            fill="lightblue"
                            onClick={() => {console.log("Jajaj");setIsConfirm(true)}}
                          />
                        </StructuredListCell>
                      </StructuredListRow>
                    );
                  })}
                </StructuredListBody>
              </StructuredListWrapper>
            ) : (
              <p>There is no data in this moment</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
