import axios from 'axios';

const KEY = 'AIzaSyAfBQJHl3ZM2pmvETH5wSzX6vT3tkgl_gE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
