import axios from "axios";
const KEY = "AIzaSyBmoE3oqKwprKWlKLaNSR0yDjiRkp7W1m4";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
