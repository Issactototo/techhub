import axios from "axios";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const submit = (input) =>
  (async () => {

    console.log("HEREHER")
    console.log(input.email)
    try {
      const res = await axios.post(`${baseUrl}/submit`,
        {
            email: input.email,
            username: input.username,
            category: input.category,
            level:input.level,
            data:input.data,
            title: input.title,
            date: input.date,
            id:input.id

        } 
      );
      return res;
    } catch (e) {

      console.log("error")
      return("error")
    }
  })();
