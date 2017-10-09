import { setSearchTerm, selectedVideo, loadAllData } from './index';
import { videos, video } from '../../helpers/sample-data-test';
 // I import all seed data to test

describe('Actions Tests', () => {
  it('SUCCESS: setSearchTerm test', () => {
    const actual = {
      type: 'SEARCH',
      payload: 'cat',
    };
    const expected = setSearchTerm('cat');

    expect(actual).toEqual(expected);
  });

  it('SUCCESS: selectedVideo test', () => {
    const actual = {
      type: 'SELECTED_VIDEO',
      payload: video,
    };
    const expected = selectedVideo(video);

    expect(actual).toEqual(expected);
  });

  it('SUCCESS: loadAllData thunk test', () => {
    //try to get cat videos
    const term = 'cat';
    const thunk = loadAllData(term);
    expect(typeof thunk).toBe('function');
    //mock the api
    const youtubeSearch = jest.fn();
    youtubeSearch.mockReturnValueOnce(Promise.resolve(videos.items));

    const Api = {
      youtubeSearch,
    };

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, { Api }).then(() => {
      expect(Api.youtubeSearch).toBeCalled();
      dispatch.mockImplementationOnce(() => youtubeSearch());
      expect(dispatch).toBeCalledWith({ type: 'LOAD_ALL_DATA_PENDING' });
    });
  });

  it('FAILURE: loadAllData thunk test', () => {
    const term = 'cat';
    const thunk = loadAllData(term);
    expect(typeof thunk).toBe('function');
    //mock the api
    const youtubeSearch = jest.fn();
    youtubeSearch.mockReturnValueOnce(Promise.reject(new Error('network error')));

    const Api = {
      youtubeSearch,
    };

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, { Api }).then(() => {
      expect(Api.youtubeSearch).toBeCalled();
      dispatch.mockImplementationOnce(() => youtubeSearch());
      expect(dispatch).toBeCalledWith({ type: 'LOAD_ALL_DATA_PENDING' });
    });
  });
});
