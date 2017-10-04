import axios from 'axios';

const API_KEY = 'AIzaSyAwY9BcNdxXvVqgjKZtk9-CWPtIn4XlNK8';

export const youtubeSearch = term => {
  const url = 'https://www.googleapis.com/youtube/v3/search';
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
    maxResults: 25,
  };

  return axios(url, { params })
    .then(response => response.data);
};
