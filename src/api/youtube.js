import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
