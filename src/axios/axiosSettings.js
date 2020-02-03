import axios from "axios";

const URL = `https://color-game-dogrodnik.herokuapp.com/`;

export default axios.create({
  baseURL: URL
});
