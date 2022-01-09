import React from "react";
import { HeadingBar } from "../components";
import { TextInput, Button, Form } from "carbon-components-react";

export function SetPasswordPage() {
    const handleSubmit = async (event) => {
        // setLoading(true)
        // event.preventDefault();
        // console.log("event.target.email.invalid");
        // setUsernameValid(false);
        // setEmailValid(false);
        // setReasonValid(false);
        // const isValid = checkJoinInputValidation(
        //   event.target.email.value,
        //   event.target.name.value,
        //   event.target.reason.value
        // );
        // if (!isValid) {setLoading(false);return;};
        // const response = await join({
        //   email: event.target.email.value,
        //   username: event.target.name.value,
        //   reason: event.target.reason.value,
        //   topic: event.target.topic.value,
        //   isReferred: event.target.isReferred.checked.toString(),
        // });
        // if (response === "Error") {
        //   setFormValid(false);
        // // }else{
    
        // }
        // setLoading(false);
      };
      
  return (
    <div className="headingTemplate">
      <HeadingBar title="Set Password" />
      <div className="BackgroundVerticalTemplate">
        <div className="BackgroundVerticalWidthLimit80Template">
          <div>
          <Form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "2rem" }}>
                <TextInput
                  id="newPassword"
                  invalid={false}
                  helperText="Contains at least 10 characters/numbers."
                  invalidText="Enter at least 10 characters/numbers."
                  labelText="New Password"
                  placeholder=""
                />
                 </div>
                 <div style={{ marginBottom: "2.5rem" }}>
                <TextInput
                  id="confirmedPassword"
                  invalid={true}
                  helperText="This will be your username"
                  invalidText="The name cannot be empty."
                  labelText="Desired Username"
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
    </div>
  );
}
