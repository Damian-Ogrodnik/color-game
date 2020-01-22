import axios from "axios";

const URL = `https://http://localhost:7000/`;

export default axios.create({
  baseURL: URL
});
