import selectedVideo from './selected-video';
import {video} from '../../helpers/sample-data-test';

describe('selectedVideo', function() {
  it('returns an the default state if passed in state that is undefined', () => {
    const nextState = selectedVideo(undefined, {});
    expect(nextState).toEqual({video: null, status: null});
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)', () => {
    const prevState = {
      video: null,
      status: null
    };

    const nextState = selectedVideo(prevState, {type: 'UNKNOWN'});
    expect(nextState).toBe(prevState);
  });

  it('return a new state with the specified selected youtube video set on it', () => {
    const prevState = {
      video: null,
      status: null
    }
    const nextState = selectedVideo(prevState, {
      type: 'SELECTED_VIDEO',
      payload: video
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({video: video, status: 'FULFILLED'});
  });
});
