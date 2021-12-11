
import axios from "axios";

const baseUrl = "http://localhost:5000";


// Return the whole object of a new game
export const userStoreImage = (input) =>
  (async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/userInformation/image`,
        {
            email: input.email,
            image: input.image
        } 
      );
      return res;
    } catch (e) {

      console.log("error")
      return("error")
    }
  })();

  export const userGetImage = (input) =>
  (async () => {
    try {
      console.log("aejifbiabf")
      console.log(input)
      const res = await axios.get(`${baseUrl}/user/userInformation/image/${input.email}`);
      return res;
    } catch (e) {

      console.log("error")
      return("error")
    }
  })();
