import {HeaderGlobalAction,ModalWrapper, Modal,TextInput,Button, Loading } from "carbon-components-react";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {UserAccess20} from "@carbon/icons-react";
import Cookies from 'js-cookie'
import { userLogin } from "../../functions/local/login";

import "./rightHeader.css"
import 'carbon-components/css/carbon-components.min.css';


export function NotLoginedSubHeader({setIsLogin}){
    const navigate = useNavigate();
    const [isOpen, setIsOpen] =useState(false);
    const [isLoading, setIsLoading] =useState(false);
    const [isValid, setIsValid] =useState(true);
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");


    const handleLogin = async () => {
        setIsLoading(true);
        const result = await userLogin({email:email,password:password});
        if(result!==false){

            setIsLogin(true);
            Cookies.set("isLogin", "true")
            navigate("../profile",{ state:{email: result.data.email , image: result.data.profileImage}})
        }else{
            setIsValid(false);
        }
        setIsLoading(false);
    }

    return(
        <HeaderGlobalAction aria-label="Login">
            {
                isLoading? <Loading/>:null
            }
            {isOpen && !isLoading? 
                <Modal
                    open={isOpen}
                    buttonTriggerText=""
                    primaryButtonText="Login"
                    secondaryButtonText="Cancel"
                    onRequestClose={()=>setIsOpen(false)}
                    onRequestSubmit={handleLogin}
                >
                    
                    <h2>Registered Contributor Login</h2>
                    <TextInput
                        labelText={<p style={{color:"black"}}>Email</p>}
                        value = {email}
                        onChange={event => setEmail(event.target.value) } 
                    />
                    <br/>
                    <TextInput
                        id="password"
                        labelText={<p style={{color:"black"}}>Password</p>}
                        invalid={!isValid}
                        invalidText="Incorrect Input."
                        value = {password}
                        onChange={event => setPassword(event.target.value) } 
                    />
                    <br/>
                    <p>Forgot password</p>
                </Modal>
            :null}

            <UserAccess20 onClick={() => {setIsOpen(true);}}/>
        </HeaderGlobalAction>
    )
}

