import axios from "axios";
import uuid from "uuid/v4";

import { baseUrl } from "../../constants";


export const getLandingContent =  () =>
  (async () => {
    try {
      const res = await axios.get(`${baseUrl}/cms/`);
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();