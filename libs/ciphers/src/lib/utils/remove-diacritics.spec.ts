import { removeDiacritics } from './remove-diacritics';

describe('removeDiacritics', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'abc';
    expect(removeDiacritics(text)).toEqual(result);
  });

  it('should work for characters with diacritics', () => {
    const text = 'ábč';
    const result = 'abc';
    expect(removeDiacritics(text)).toEqual(result);
  });

  it('should work for uppercase characters with diacritics', () => {
    const text = 'ÁBČ';
    const result = 'ABC';
    expect(removeDiacritics(text)).toEqual(result);
  });

  it('should work for unicode characters', () => {
    const text = '🏛ábč';
    const result = '🏛abc';
    expect(removeDiacritics(text)).toEqual(result);
  });

  it('should not change characters that are not accented variants like Polish Ł', () => {
    const text = 'Łódź';
    const result = 'Łodz';
    expect(removeDiacritics(text)).toEqual(result);
  });
});
