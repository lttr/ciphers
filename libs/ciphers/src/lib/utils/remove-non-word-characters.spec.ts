import { removeNonWordCharacters } from './remove-non-word-characters';

describe('removeNonWordCharacters', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'abc';
    expect(removeNonWordCharacters(text)).toEqual(result);
  });

  it('should work for typical punctuation in a sentense', () => {
    const text = 'a.b,c?';
    const result = 'abc';
    expect(removeNonWordCharacters(text)).toEqual(result);
  });

  it('should work for wierd characters', () => {
    const text = '🏛 !@#%^&*(){}[]';
    const result = ' ';
    expect(removeNonWordCharacters(text)).toEqual(result);
  });
});
