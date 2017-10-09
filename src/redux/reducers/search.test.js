import search from './search';

describe('search', () => {
  it('returns an the default state if passed in state that is undefined', () => {
    const nextState = search(undefined, {});
    expect(nextState).toEqual({ picture: null });
  });

  it('returns the exact state given an unkown type (i.e., does not modify the state)', () => {
    const prevState = {
      picture: null
    };

    const nextState = search(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  it('return a new state with the specified search term set on it', () => {
    const prevState = {
      picture: null,
    };
    const nextState = search(prevState, {
      type: 'SEARCH',
      payload: 'cat',
    });

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ picture: 'cat' });
  });
});
