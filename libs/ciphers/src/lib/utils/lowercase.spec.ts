import { lowercase } from './lowercase';

describe('lowercase', () => {
  it('should work for english characters', () => {
    const text = 'ABC';
    const result = 'abc';
    expect(lowercase(text)).toEqual(result);
  });

  it('should work for characters with diacritics', () => {
    const text = 'ÁBČ';
    const result = 'ábč';
    expect(lowercase(text)).toEqual(result);
  });

  it('should work for unicode characters', () => {
    const text = '🏛';
    const result = '🏛';
    expect(lowercase(text)).toEqual(result);
  });
});
