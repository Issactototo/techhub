import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// Return the whole object of a new game
export const initialiseCall = () =>
  (async () => {
    try {
      const res = await axios.post(`${baseUrl}/initialise`);
      return res;
    } catch (e) {
      console.log(e.res);
    }
  })();

// Get data from active session
export const activeSessionCall = (id) =>
  (async () => {
    try {
      const res = await axios.get(`${baseUrl}/isLogin`);
      return res;
    } catch (e) {
      console.log(e.res);
    }
  })();