import React, { useEffect, useState } from "react";
import { getPendingUsers } from "../../functions";
import {
  Loading,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
  TextInput,
  Modal,
} from "carbon-components-react";
import { HeadingBar, ConfirmModal } from "../../components";
import { CheckmarkOutline20 } from "@carbon/icons-react";
import { acceptPendingUser, loginAdmin } from "../../functions";
import { useNavigate } from "react-router";

export function ApprovePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [purpose, setPurpose] = useState(null);
  const [isPurposeValid, setIsPurposeValid] = useState(true);
  const [purposePassword, setPurposePassword] = useState(null);
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAPI() {
      const response = await getPendingUsers();
      setData(response);
      console.log("ffchijokp");
      setIsLoading(false);
    }
    fetchAPI();
  }, []);


  const handleLogin = async () => {
    setIsLoading(true);
    const result = await loginAdmin({purpose:purpose,password:purposePassword});
    if(result!==false){

        setIsPurposeValid(true);
        setIsAdmin(true)
    }else{
      setIsPurposeValid(false);
    }
    setIsLoading(false);
}


  return (
    <div className="headingTemplate">
      <HeadingBar title="Approve New Users" />
      <div className="BackgroundVerticalTemplate">
        {isLoading ? (
          <Loading />
        ) : !isAdmin ? (
          <Modal
                    open={true}
                    buttonTriggerText=""
                    primaryButtonText="Login"
                    secondaryButtonText="Cancel"
                    onRequestClose={()=>navigate("../")}
                    onRequestSubmit={handleLogin}
                >
                    
                    <h2>Registered Contributor Login</h2>
                    <TextInput
                        labelText={<p style={{color:"black"}}>Email</p>}
                        value = {purpose}
                        onChange={event => setPurpose(event.target.value) } 
                    />
                    <br/>
                    <TextInput
                        id="password"
                        labelText={<p style={{color:"black"}}>Password</p>}
                        invalid={!isPurposeValid}
                        invalidText="Incorrect Input."
                        value = {purposePassword}
                        onChange={event => setPurposePassword(event.target.value) } 
                    />
                    <br/>
                    <p>Forgot password</p>
                </Modal>
        ) : (
          <div className="PendingTable">
            {isConfirm ? (
              <ConfirmModal
                title="Confirm!"
                text="Confirm to add this user?"
                closeOnPress={() => setIsConfirm(false)}
                callback={async () => {
                  console.log("selectedUser");
                  console.log(selectedUser);
                  const response = await acceptPendingUser({
                    email: selectedUser[0],
                    username: selectedUser[1],
                  });
                  console.log(response);
                  window.location.reload();
                  setIsConfirm(false);
                }}
              />
            ) : null}
            {data !== [] ? (
              <StructuredListWrapper>
                <StructuredListHead>
                  <StructuredListRow head>
                    <StructuredListCell head>Email</StructuredListCell>
                    <StructuredListCell head>Username</StructuredListCell>
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
                        {pendingUser.map((item, itemIndex) => {
                          return (
                            <StructuredListCell className="StructuredListCell">
                              <p className="PendingTableText">{item}</p>
                            </StructuredListCell>
                          );
                        })}
                        <StructuredListCell>
                          <CheckmarkOutline20
                            fill="lightblue"
                            onClick={() => {
                              setSelectedUser(pendingUser);
                              setIsConfirm(true);
                            }}
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
