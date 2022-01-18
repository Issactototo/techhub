import React, { useState, useEffect } from "react";
import { HeadingBar } from "../components";
import { TextInput, Button, Form, Loading, Modal } from "carbon-components-react";
import { useParams, useNavigate } from "react-router-dom";
import { verifyMailId,submitPassword } from "../functions/api";

export function SetPasswordPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [redisData, setRedisData] = useState(null);
  const [isVerifiedCode, setIsVerifiedCode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isValidId, setValidId] = useState(true)
  const [isPasswordValid, setValidPassword] = useState(true)
  const [isConfirmedPasswordValid, setConfirmedPassword] = useState(true)

  const handleSubmit = async (event) => {
    setIsLoading(true)
      event.preventDefault();
      if(event.target.newPassword.value.length<10){
        setValidPassword(false);
      }else if (event.target.newPassword.value!==event.target.confirmedPassword.value){
        setValidPassword(true);
        setConfirmedPassword(false);
      }else{
        setValidPassword(true);
        setConfirmedPassword(true);
        await submitPassword({email:redisData.email,username:redisData.username,password:event.target.newPassword.value,key:id})
        navigate("../");
        //submit
      }
      
      setIsLoading(false);
  };
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await verifyMailId({ id: id });
      if(!response){
        setValidId(false);
        return;
      }
      setRedisData(response);
      setIsLoading(false);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="headingTemplate">
      <HeadingBar title="Set Password" />
      {isValidId?
        isLoading ? (
        <Loading />
      ) : isVerifiedCode ? (
        <div className="BackgroundVerticalTemplate">
          <div className="BackgroundVerticalWidthLimit80Template">
            <div>
              <Form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "2rem" }}>
                  <TextInput
                    id="newPassword"
                    invalid={!isPasswordValid}
                    helperText="Contains at least 10 characters/numbers."
                    invalidText="Enter at least 10 characters/numbers."
                    labelText="New Password"
                    placeholder=""
                  />
                </div>
                <div style={{ marginBottom: "2.5rem" }}>
                  <TextInput
                    id="confirmedPassword"
                    invalid={!isConfirmedPasswordValid}
                    invalidText="Password does not match"
                    labelText="Confirm password"
                    placeholder=""
                  />
                </div>
                <Button
                  kind="primary"
                  tabIndex={0}
                  type="submit"
                  // onClick={() => async function(){

                  // }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Sorry! Your link is not valid</p>
        </div>
      ):
        <Modal
        open
        passiveModal
        modalHeading="Your link has expired/ is wrong!"
        modalLabel="Invalid URL"
        >
          <p onClick={()=>navigate("../")}> Back to Main Page </p>
          </Modal>
      }
    </div>
  );
}
