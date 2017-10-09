import Index from './index';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('test ReactDOM.render', () => {
  it('test ReactDOM render', () => {
    expect(JSON.stringify(Index)).toMatchSnapshot();
  });
});
