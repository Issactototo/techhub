import React from "react";
import "./about.css"
import { HeadingBar } from "../../components";
import {
    Form,
    TextInput, 
    TextArea,
    Select,
    SelectItem,
    Button,
    Checkbox
} from "carbon-components-react";
import {Categories} from "../../data";
import "../pages.css"


export const AboutJoinPage = () =>{
    //const cardSample = {title:"abc",description:"desciption"}
    return (
        <div className="headingTemplate">
           <HeadingBar title="Join Us"/>
            <div className="BackgroundVerticalTemplate">
            <Form>
            <div style={{marginBottom: '2rem'}}>
                <TextInput
                id="test2"
                helperText="This will be your username"
                invalidText="Invalid error message."
                labelText="Desired Username"
                placeholder="Name"
                />
            </div>
            <div style={{marginBottom: '2rem'}}>
                <TextInput
                id="test2"
                invalidText="Invalid error message."
                labelText="Email"
                placeholder="@gmail.com"
                />
            </div>
            <div style={{marginBottom: '2rem'}}>
            <TextArea
                cols={50}
                helperText="A short paragraph about why you want to join us"
                id="test5"
                invalidText="Invalid error message."
                labelText="Why do you want to join us?"
                placeholder="Placeholder text"
                rows={4}
            />
            </div>
            <div style={{marginBottom: '2rem'}}>
                <Select
                defaultValue="placeholder-item"
                id="select-1"
                invalidText="This is an invalid error message."
                labelText="Which topic do you plan to write about?"
                >
                {Categories.map((category)=><SelectItem
                    text={category.title}
                    value={category.title}
                />
                )}
                </Select>
            </div>

            <fieldset className="bx--fieldset">
                <Checkbox labelText="Click if you are referred by a contributor in the blog" id="checked" />
            </fieldset>
            <Button
                kind="primary"
                tabIndex={0}
                type="submit"
            >
                Submit
            </Button>
            
            </Form>
            </div>
        </div>
    );
}