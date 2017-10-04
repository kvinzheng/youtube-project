const API_KEY = 'AIzaSyAgA-95G_Fqv8wtOSNxYHDaYziOx7NWB3U';

export const youtubeSearch = term => {
  let url = 'https://www.googleapis.com/youtube/v3/search'
  let params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
    maxResults: 25
  };

  return axios(url, { params: params }).then(response => response.data)
};
