import axios from "axios";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const getImageById = (input) =>
  (async () => {
      
    try {
        console.log("gaklpsegokjan")
        console.log(input)
      const res = await axios.get(`${baseUrl}/blogs/image/${input.id}`,
      );
      console.log("feabfhueuaf")
      console.log(res)
      return res;
    } catch (e) {
      console.log("error")
      return("error")
    }
  })();