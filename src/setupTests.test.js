import raf from './setupTests';
jest.useFakeTimers();

describe('polyfill raf test', () => {
  it('raf is a function', () => {
    const callback = jest.fn();
    raf(callback);

    expect(typeof raf).toBe('function');
    expect(setTimeout.mock.calls.length).toBe(1);
  });
});
