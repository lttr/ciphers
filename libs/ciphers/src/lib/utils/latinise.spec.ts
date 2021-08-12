import { latinise } from './latinise';

describe('latinise', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'abc';
    expect(latinise(text)).toEqual(result);
  });

  it('should work for characters with diacritics', () => {
    const text = 'ábč';
    const result = 'abc';
    expect(latinise(text)).toEqual(result);
  });

  it('should work for uppercase characters with diacritics', () => {
    const text = 'ÁBČ';
    const result = 'ABC';
    expect(latinise(text)).toEqual(result);
  });

  it('should work for text with spaces and punctuation', () => {
    const text = 'á, b č.';
    const result = 'a, b c.';
    expect(latinise(text)).toEqual(result);
  });

  it('should work for unicode characters', () => {
    const text = '🏛ábč';
    const result = '🏛abc';
    expect(latinise(text)).toEqual(result);
  });

  it('should work for characters that looks like the target latin character', () => {
    const text = 'Łódź';
    const result = 'Lodz';
    expect(latinise(text)).toEqual(result);
  });
});
