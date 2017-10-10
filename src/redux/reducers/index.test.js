import rootReducer from './index';
import { emptySampleData } from '../../helpers/sample-data-test';

describe('Index Reducer Tests', () => {
  const base = {
    search: { picture: null },
    selectedVideo: { video: null , status: null },
    youtubeData: { myData: null, status: null },
  };

  it('it expect to handle dorData', () => {
    expect(rootReducer({}, {
      type: 'LOAD_ALL_DATA',
      payload: null,
    })).toEqual(Object.assign(base, emptySampleData));
  });
});
