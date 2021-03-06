import { uppercase } from './uppercase';

describe('uppercase', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'ABC';
    expect(uppercase(text)).toEqual(result);
  });

  it('should work for characters with diacritics', () => {
    const text = 'รกbฤ';
    const result = 'รBฤ';
    expect(uppercase(text)).toEqual(result);
  });

  it('should work for unicode characters', () => {
    const text = '๐';
    const result = '๐';
    expect(uppercase(text)).toEqual(result);
  });
});
