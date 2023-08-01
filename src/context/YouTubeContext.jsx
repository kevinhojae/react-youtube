import YouTubeService from "../service/youtube.service";
import MockYouTubeAPI from "../service/mock-youtube.client";

const { createContext, useContext } = require("react");

const YouTubeContext = createContext();

const youtubeAPI = new MockYouTubeAPI();
const youtube = new YouTubeService(youtubeAPI);

export function YouTubeContextProvider({ children }) {
  return <YouTubeContext.Provider value={youtube}>{children}</YouTubeContext.Provider>;
}

export function useYouTube() {
  return useContext(YouTubeContext);
}
