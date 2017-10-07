import {setSearchTerm, selectedVideo, loadAllData} from './index';
import {videos,video} from '../../helpers/sample-data-test';

describe('Actions Tests', () => {

  it('SUCCESS: setSearchTerm test', () => {
    const actual = {
      type: 'SEARCH',
      payload: 'cat'
    }
    const expected = setSearchTerm('cat');

    expect(actual).toEqual(expected);
  });

  it('SUCCESS: selectedVideo test', () => {
    const actual = {
      type: 'SELECTED_VIDEO',
      payload: video
    }
    const expected = selectedVideo(video);

    expect(actual).toEqual(expected);
  });

  it('SUCCESS: loadAllData thunk test', () => {
    const term = 'cat';
    const thunk = loadAllData(term);
    expect(typeof thunk).toBe('function');
    //i mock my Api function
    const youtubeSearch = jest.fn();
    //mock api calls
    youtubeSearch.mockReturnValueOnce(Promise.resolve(videos.items));
    //I mock my Api directory and set it to become an object
    const Api = {
      youtubeSearch: youtubeSearch
    };
    const dispatch = jest.fn();
    const getState = () => ({});
    //i set the return return value
    return thunk(dispatch, getState, {Api}).then(() => {
      expect(Api.youtubeSearch).toBeCalled()
      dispatch.mockImplementationOnce(() => youtubeSearch());
      expect(dispatch).toBeCalledWith({type: 'LOAD_ALL_DATA_PENDING'});
    });
  });

  it('FAILURE: loadAllData thunk test', () => {
    const term = 'cat';
    const thunk = loadAllData(term);
    expect(typeof thunk).toBe('function');
    //i mock my Api function
    const youtubeSearch = jest.fn();
    //mock api calls
    youtubeSearch.mockReturnValueOnce(Promise.reject(new Error('network error')));
    //I mock my Api directory and set it to become an object
    const Api = {
      youtubeSearch: youtubeSearch
    };
    const dispatch = jest.fn();
    const getState = () => ({});
    //i set the return return value
    return thunk(dispatch, getState, {Api}).then(() => {
      expect(Api.youtubeSearch).toBeCalled()
      dispatch.mockImplementationOnce(() => youtubeSearch());
      expect(dispatch).toBeCalledWith({type: 'LOAD_ALL_DATA_PENDING'});
    });
  });

});
