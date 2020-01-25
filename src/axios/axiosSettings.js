import axios from "axios";

const URL = `https://git.heroku.com/color-game-dogrodnik.git`;

export default axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  baseURL: URL
});
