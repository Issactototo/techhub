import axios from "axios";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const join = (input) =>
  (async () => {

    console.log("HEREHER")
    console.log(input.email)
    try {
      const res = await axios.post(`${baseUrl}/register`,
        {
            email: input.email,
            username: input.username,
            reason: input.reason,
            topic: input.topic,
            isReferred: input.isReferred
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
