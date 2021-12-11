import React, { useState } from "react";
import "./about.css";
import { HeadingBar } from "../../components";
import {
  Form,
  TextInput,
  TextArea,
  Select,
  SelectItem,
  Button,
  Checkbox,
  Modal,
  Loading
} from "carbon-components-react";
import { Categories } from "../../data";
import "../pages.css";

import { join } from "../../functions";

export const AboutJoinPage = () => {
  const [isEmailValid, setEmailValid] = useState(false);
  const [isUsernameValid, setUsernameValid] = useState(false);
  const [isReasonValid, setReasonValid] = useState(false);
  const [isFormValid, setFormValid] = useState(true);
  const [isLoading, setLoading] = useState(false);

  function checkJoinInputValidation(email, name, reason) {
    if (name == null || name === "" || name.length < 5) {
      setUsernameValid(true);
    } else if (email == null || email === "" || email.length < 5) {
      setEmailValid(true);
    } else if (reason == null || reason === "" || reason.length < 50) {
      setReasonValid(true);
    } else {
      return true;
    }
    return false;
  }
  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();
    console.log("event.target.email.invalid");
    setUsernameValid(false);
    setEmailValid(false);
    setReasonValid(false);
    const isValid = checkJoinInputValidation(
      event.target.email.value,
      event.target.name.value,
      event.target.reason.value
    );
    if (!isValid) {setLoading(false);return;};
    const response = await join({
      email: event.target.email.value,
      username: event.target.name.value,
      reason: event.target.reason.value,
      topic: event.target.topic.value,
      isReferred: event.target.isReferred.checked.toString(),
    });
    if (response === "Error") {
      setFormValid(false);
    // }else{

    }
    setLoading(false);
  };
  return (
        <div className="headingTemplate">
            {
                isLoading?
                <Loading/>
                :null
            }
            <Modal
                open={!isFormValid}
                passiveModal={true}
                modalHeading="Email is in use already. Please try another one"
                onRequestClose={()=>{
                    setFormValid(true)
                }}
            />
          <HeadingBar title="Join us as a content creator" />
          <div className="BackgroundVerticalTemplate">
            <Form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "2rem" }}>
                <TextInput
                  id="name"
                  invalid={isUsernameValid}
                  helperText="This will be your username"
                  invalidText="The name cannot be empty."
                  labelText="Desired Username"
                  placeholder="Name"
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <TextInput
                  id="email"
                  invalidText="Invalid email."
                  invalid={isEmailValid}
                  labelText="Email"
                  placeholder="@gmail.com"
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <TextArea
                  cols={50}
                  helperText="A short paragraph about why you want to join us"
                  id="reason"
                  invalidText="Minimum 50 characters"
                  invalid={isReasonValid}
                  labelText="Why do you want to join us?"
                  placeholder="Placeholder text"
                  rows={4}
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <Select
                  defaultValue="placeholder-item"
                  id="topic"
                  invalidText="This is an invalid error message."
                  labelText="Which topic do you plan to write about?"
                >
                  {Categories.map((category) => (
                    <SelectItem text={category.title} value={category.title} />
                  ))}
                </Select>
              </div>

              <fieldset className="bx--fieldset">
                <Checkbox
                  labelText="Click if you are referred by a contributor in the blog"
                  id="isReferred"
                />
              </fieldset>
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
  );
};
