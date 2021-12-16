import axios from "axios";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const getBlogsByCategory = (input) =>
  (async () => {
      
    try {
      const res = await axios.get(`${baseUrl}/blogs/category/${input.category}`,
      );
      return res;
    } catch (e) {
      console.log("error")
      return("error")
    }
  })();
