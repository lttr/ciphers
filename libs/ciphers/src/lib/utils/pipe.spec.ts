import { lowercase } from './lowercase';
import { pipe } from './pipe';
import { removeDiacritics } from './remove-diacritics';

describe('pipe', () => {
  it('should work', () => {
    const text = 'Á';
    const result = 'a';
    const functions = [lowercase, removeDiacritics];
    expect(pipe(text, ...functions)).toEqual(result);
  });
});
