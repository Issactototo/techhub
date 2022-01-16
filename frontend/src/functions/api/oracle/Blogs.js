import axios from "axios";
import uuid from "uuid/v4";

import { baseUrl } from "../../constants";

// Return the whole object of a new game
export const getBlogById = (input) =>
  (async () => {
    try {
      const res = await axios.get(`${baseUrl}/blogs/blog/${input.id}`);
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const getBlogsByCategory = (input) =>
  (async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/blogs/category/${input.category}`
      );
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const submit = (input) =>
  (async () => {
    for (let component of input.data) {
      if (component.type === "image") {
        const response = await storeImage(component.data);
        if (response !== "error") {
          component.data = response.data;
        } else {
          return "error";
        }
      }
    }
    console.log("1353678790");
    console.log(input.data);
    const stringtifiedData = await JSON.stringify(input.data);
    console.log(stringtifiedData);
    try {
      const res = await axios.post(`${baseUrl}/blogs/submit`, {
        email: input.email,
        username: input.username,
        category: input.category,
        level: input.level,
        data: stringtifiedData,
        title: input.title,
        date: new Date().toLocaleString(),
        id: uuid(),
      });
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const storeImage = (image) =>
  (async () => {
    console.log("HEREHER");
    try {
      const res = await axios.post(`${baseUrl}/blogs/storeImage`, {
        data: image,
        id: uuid(),
      });
      console.log("res");
      console.log(res);
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const getImageById = (input) =>
  (async () => {
    try {
      console.log("gaklpsegokjan");
      console.log(input);
      const res = await axios.get(`${baseUrl}/blogs/image/${input.id}`);
      console.log("feabfhueuaf");
      console.log(res);
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();
