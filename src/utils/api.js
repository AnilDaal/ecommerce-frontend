import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-book-backend-ok7v.onrender.com/api/v1",
});
export default instance;
