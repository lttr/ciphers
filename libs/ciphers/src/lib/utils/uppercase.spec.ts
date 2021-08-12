import { uppercase } from './uppercase';

describe('uppercase', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'ABC';
    expect(uppercase(text)).toEqual(result);
  });

  it('should work for characters with diacritics', () => {
    const text = 'ábč';
    const result = 'ÁBČ';
    expect(uppercase(text)).toEqual(result);
  });

  it('should work for unicode characters', () => {
    const text = '🏛';
    const result = '🏛';
    expect(uppercase(text)).toEqual(result);
  });
});
