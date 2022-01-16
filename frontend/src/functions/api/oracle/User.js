import axios from "axios";

import { baseUrl } from "../../constants";

export const join = (input) =>
  (async () => {
    try {
      const res = await axios.post(`${baseUrl}/pending`, {
        email: input.email,
        username: input.username,
        reason: input.reason,
        topic: input.topic,
        isReferred: input.isReferred,
      });
      console.log("mnfbaevhbnlkfaejfn");
      return res;
    } catch (e) {
      console.log("mnfbaevhbnlkfaejfn");

      console.log("error");
      return "Error";
    }
  })();

export const login = (input) =>
  (async () => {
    console.log("HEREHER");
    console.log(input.email);
    try {
      const res = await axios.post(`${baseUrl}/user/login`, {
        email: input.email,
        password: input.password,
      });
      return res;
    } catch (e) {
      console.log("mnfbaevhbnlkfaejfn");

      console.log("error");
      return "error";
    }
  })();

export const userStoreImage = (input) =>
  (async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/userInformation/image`, {
        email: input.email,
        image: input.image,
      });
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const userGetImage = (input) =>
  (async () => {
    try {
      console.log("aejifbiabf");
      console.log(input);
      const res = await axios.get(
        `${baseUrl}/user/userInformation/image/${input.email}`
      );
      return res;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const getPendingUsers = (input) =>
  (async () => {
    try {
      console.log(input);
      const res = await axios.get(`${baseUrl}/pending`);
      return res.data;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const acceptPendingUser = (input) =>
  (async () => {
    try {
      console.log(input);
      const res = await axios.post(
        `${baseUrl}/mail/acceptUser/${input.email}/${input.username}`
      );
      return res.data;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();

export const verifyMailId = (input) =>
  (async () => {
    try {
      const res = await axios.post(`${baseUrl}/mail/verifyId/${input.id}`);
      return res.data;
    } catch (e) {
      console.log("error");
      return "error";
    }
  })();
