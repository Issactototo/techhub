import axios from "axios";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const verifyMailId = (input) =>
  (async () => {
      
    try {
      const res = await axios.post(`${baseUrl}/mail/verifyId/${input.id}`,
      );
      return res.data;
    } catch (e) {
      console.log("error")
      return("error")
    }
  })();