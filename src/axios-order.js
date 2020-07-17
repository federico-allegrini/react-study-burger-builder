import axios from "axios";
const instance = axios.create({
  baseURL: "https://react-my-burger-f376f.firebaseio.com/",
});
export default instance;
