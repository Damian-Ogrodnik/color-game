import axios from "axios";

const URL = `http://color-game-dogrodnik.herokuapp.com/`;

export default axios.create({
  baseURL: URL
});
