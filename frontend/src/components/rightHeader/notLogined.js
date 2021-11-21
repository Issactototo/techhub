import {HeaderGlobalAction,ModalWrapper, Modal,TextInput,Button } from "carbon-components-react";
import {UserAccess20} from "@carbon/icons-react";
import { useState } from "react";
import "./rightHeader.css"
import 'carbon-components/css/carbon-components.min.css';
import { useNavigate } from 'react-router-dom';

export function NotLoginedSubHeader({setIsLogin}){
    const navigate = useNavigate();
    const [isOpen, setIsOpen] =useState(false);
    return(
        <HeaderGlobalAction aria-label="Login">
            {isOpen? 
                <Modal
                    open={isOpen}
                    buttonTriggerText=""
                    primaryButtonText="Login"
                    secondaryButtonText="Cancel"
                    onRequestClose={()=>setIsOpen(false)}
                    onRequestSubmit={()=>{setIsLogin(true);navigate("../profile");}}
                >
                    
                    <h2>Login</h2>
                    <br/>
                    <TextInput
                        labelText="Email"
                    />
                    <br/>
                    <TextInput
                        labelText="Password"
                    />
                </Modal>
            :null}

            <UserAccess20 onClick={() => {setIsOpen(true)}}/>
        </HeaderGlobalAction>
    )
}