import axios from "axios";
import uuid from "uuid/v4";

const baseUrl = "http://localhost:5000";

// Return the whole object of a new game
export const submit = (input) =>
  (async () => {

    for(let component of input.data){
      if(component.type==='image'){
        const response = await storeImage(component.data);
        if(response!=='error'){
          component.data = response.data
        }else{
          return 'error'
        }
      }
    }
    console.log("1353678790")
    console.log(input.data)
    const stringtifiedData = await JSON.stringify(input.data)
    console.log(stringtifiedData)
    try {
      const res = await axios.post(`${baseUrl}/blogs/submit`,
        {
            email: input.email,
            username: input.username,
            category: input.category,
            level:input.level,
            data: stringtifiedData,
            title: input.title,
            date: new Date().toLocaleString(), 
            id: uuid()

        } 
      );
      return res;
    } catch (e) {

      console.log("error")
      return("error")
    }
  })();


  export const storeImage = (image) =>
  (async () => {

    console.log("HEREHER")
    try {
      const res = await axios.post(`${baseUrl}/blogs/storeImage`,
        {
            data:image,
            id: uuid()
        } 
      );
      console.log('res')
      console.log(res)
      return res;
    } catch (e) {

      console.log("error")
      return("error")
    }
  })();
