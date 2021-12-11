import axios from "axios";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const login = (input) =>
  (async () => {

    console.log("HEREHER")
    console.log(input.email)
    try {
      const res = await axios.post(`${baseUrl}/user/login`,
        {
            email: input.email,
            password: input.password
        } 
      );
      return res;
    } catch (e) {
      console.log("mnfbaevhbnlkfaejfn")

      console.log("error")
      return("error")
    }
  })();
