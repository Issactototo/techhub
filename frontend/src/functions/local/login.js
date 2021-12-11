
import { login } from "../api/oracle"

export async function userLogin(input){
    const result = await login(input); 
    if(result==='error') return false;
    return  result
}