import rootReducer from './index';
import { emptySampleData } from '../../helpers/sample-data-test';

describe('Index Reducer Tests', () => {
  const base = {
    search: '',
    selectedVideo: {},
    youtubeData: [],
  };

  it('it expect to handle dorData', () => {
    expect(rootReducer({}, {
      type: 'LOAD_ALL_DATA',
      payload: null,
    })).toEqual(Object.assign(base, emptySampleData));
  });
});
