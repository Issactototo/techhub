
import axios from "axios";

const baseUrl = "http://localhost:5000";


async function base64ToBlob(b64){
    let returnAnswer =  await fetch(b64)
    .then(res => {return res.blob()})
    .then(e=> {return e})
    console.log('returnAnswer')
    console.log(returnAnswer)
    return returnAnswer 
}


// Return the whole object of a new game
export const userStoreImage = (input) =>
  (async () => {

    // console.log(input.image)
    // const blobImage = await base64ToBlob(input.image)
    // console.log("HEREHER")
    // console.log(blobImage)
    // console.log(JSON.stringify(blobImage))
    try {
      const res = await axios.post(`${baseUrl}/user/userInformation/image`,
        {
            email: input.email,
            image: input.image
        } 
      );
      console.log("mnfbaevhbnlkfaejfn")
      return res;
    } catch (e) {
      console.log("mnfbaevhbnlkfaejfn")

      console.log("error")
      return("Error")
    }
  })();
