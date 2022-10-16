import axios from "axios";

const KEY = "AIzaSyBPQ11Rec4MfLoysCjxaTuQElJwCrF_BqM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
