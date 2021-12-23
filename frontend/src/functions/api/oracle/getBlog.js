import axios from "axios";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const getBlogById = (input) =>
  (async () => {
      
    try {
      const res = await axios.get(`${baseUrl}/blogs/blog/${input.id}`,
      );
      return res;
    } catch (e) {
      console.log("error")
      return("error")
    }
  })();