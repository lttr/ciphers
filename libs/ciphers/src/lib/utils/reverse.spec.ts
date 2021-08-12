import { reverse } from './reverse';

describe('reverse', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'cba';
    expect(reverse(text)).toEqual(result);
  });

  it('should work for characters with diacritics', () => {
    const text = 'ábč';
    const result = 'čbá';
    expect(reverse(text)).toEqual(result);
  });

  it('should work for unicode characters', () => {
    const text = '🏛ábč';
    const result = 'čbá🏛';
    expect(reverse(text)).toEqual(result);
  });
});
