import {HeaderGlobalAction} from "carbon-components-react";
import {User20} from "@carbon/icons-react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export function LoginedSubHeader(){
    const navigate = useNavigate();
    return(
        <HeaderGlobalAction aria-label="Profile" onClick = {()=>navigate("../profile")}>
            <User20/>
        </HeaderGlobalAction>
    )
}

const mapStateToProps = (state) => {
    return {
      profile: state.user.profile
    }
  }
  
  export const LoginedSubHeaderApp =  connect(mapStateToProps)(LoginedSubHeader);