import {HeaderGlobalAction} from "carbon-components-react";
import {User20} from "@carbon/icons-react";
import { useNavigate } from 'react-router-dom';


export function LoginedSubHeader(){
    const navigate = useNavigate();
    return(
        <HeaderGlobalAction aria-label="Profile" onClick = {()=>navigate("../profile")}>
            <User20/>
        </HeaderGlobalAction>
    )
}