import React from "react";
import { Tile, Button,CodeSnippet, FileUploader } from "carbon-components-react";
import {AvatarLogo} from "../data"
import { useNavigate } from "react-router";
import { HeadingBar } from "../components";
import Cookies from 'js-cookie'


export function ProfilePage({setIsLogin}){
    const navigate = useNavigate();
    return (
        <div className ="headingTemplate">
            <HeadingBar title="Profile"/>
            <div className ="BackgroundFAQTemplate">
                <div className="profileTemplate">
                    <Tile className="ProfileTile">
                        <AvatarLogo fill="blue" width="30vh"/>
                        <div className="bx--file__container">
                            <FileUploader
                            accept={[
                                '.jpg',
                                '.png'
                            ]}
                            buttonKind="primary"
                            buttonLabel="Add files"
                            filenameStatus="edit"
                            iconDescription="Clear file"
                            labelDescription="only .jpg files at 500mb or less"
                            labelTitle="Upload"
                            />
                        </div>
        
                    </Tile>
                    <div className="CopyTextSection">
                        <div className = "smallSectionBox">
                            <p>User Name:</p>
                            <CodeSnippet type="single" className="blackText">UserName</CodeSnippet>
                        </div>
                        <div className = "smallSectionBox">
                            <p>Public Link:</p>
                        <CodeSnippet type="single" className="blackText">PublicLink</CodeSnippet>
                        </div>
                        <div className = "smallSectionBox">
                            <Button onClick={()=>
                                {
                                    Cookies.set("isLogin", "false");
                                    setIsLogin(false);
                                    navigate("../");
                                    
                                }
                            }>Logout</Button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}