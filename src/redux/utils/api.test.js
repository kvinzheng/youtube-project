import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {youtubeSearch} from './api.js';
import {videos} from '../../helpers/sample-data-test';

describe('api test', () => {
  it('returns youtube videos list when youtubeSearch is called', done => {
    const API_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = 'AIzaSyAwY9BcNdxXvVqgjKZtk9-CWPtIn4XlNK8';
    const term = 'cat';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video',
      maxResults: 25
    };

    const mockResult = videos.items;
    const mock = new MockAdapter(axios);

    mock.onGet(API_URL).reply(200, mockResult)
    youtubeSearch(term, {params: params}).then(response => {
      expect(response).toEqual(mockResult);
      done();
    });
  });
});
