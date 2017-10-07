import youtubeData from './youtube-data';
import {videos} from '../../helpers/sample-data-test';

describe('youtubeData', function() {
  it('returns an the default state if passed in state that is undefined', () => {
    const nextState = youtubeData(undefined, {});
    expect(nextState).toEqual({myData: null, status: null});
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)', () => {
    const prevState = {
      myData: null,
      status: null
    }

    const nextState = youtubeData(prevState, {type: 'UNKNOWN'});
    expect(nextState).toBe(prevState);
  });

  it('FULFILLED: return a new state with the specified youtube data set on it', () => {
    const prevState = {
      myData: null,
      status: null
    }
    const nextState = youtubeData(prevState, {
      type: 'LOAD_ALL_DATA_FULFILLED',
      payload: videos.items
    });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({myData: videos.items, status: 'FULFILLED'});;
  });

  it('REJECTED: return a new state with the specified youtube data set on it', () => {
    const prevState = {
      myData: null,
      status: null
    }
    const nextState = youtubeData(prevState, {
      type: 'LOAD_ALL_DATA_REJECTED',
      payload: undefined
    });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({myData: null, status: 'REJECTED'});;
  });

  it('PENDING: return a new state with the specified youtube data set on it', () => {
    const prevState = {
      myData: null,
      status: null
    }
    const nextState = youtubeData(prevState, {
      type: 'LOAD_ALL_DATA_PENDING',
      payload: undefined
    });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({myData: null, status: 'PENDING'});;
  });
});
