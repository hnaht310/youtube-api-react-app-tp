import axios from 'axios';

// const KEY = 'AIzaSyDL8LddAZHUy91f3gwLMlV37YpxKiZZ2mE';
const KEY = 'AIzaSyBiq34YYSd-40GWOKEawO-wzX3WWYHqA9g';

// create a new instance of axios with a custom config
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video', // only search for videos, not playlists
    maxResults: 10,
    key: KEY,
  },
});
