import {HeaderGlobalAction,ModalWrapper, Modal,TextInput,Button } from "carbon-components-react";

import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ActionCreators } from '../../redux/actions';
import {UserAccess20} from "@carbon/icons-react";
import Cookies from 'js-cookie'

import "./rightHeader.css"
import 'carbon-components/css/carbon-components.min.css';



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
                    onRequestSubmit={()=>{
                        setIsLogin(true);
                        Cookies.set("isLogin", "true")
                        navigate("../profile");}}
                >
                    
                    <h2>Registered Contributor Login</h2>
                    <TextInput
                        labelText={<p style={{color:"black"}}>Email</p>}
                    />
                    <br/>
                    <TextInput
                        labelText={<p style={{color:"black"}}>Password</p>}
                    />
                    <p>Forgot password</p>
                </Modal>
            :null}

            <UserAccess20 onClick={() => {setIsOpen(true);}}/>
        </HeaderGlobalAction>
    )
}

