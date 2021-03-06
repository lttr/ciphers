import { lowercase } from './lowercase';

describe('lowercase', () => {
  it('should work for english characters', () => {
    const text = 'ABC';
    const result = 'abc';
    expect(lowercase(text)).toEqual(result);
  });

  it('should work for characters with diacritics', () => {
    const text = 'รBฤ';
    const result = 'รกbฤ';
    expect(lowercase(text)).toEqual(result);
  });

  it('should work for unicode characters', () => {
    const text = '๐';
    const result = '๐';
    expect(lowercase(text)).toEqual(result);
  });
});
