import { normalizeWhitespace } from './normalize-whitespace';

describe('normalizeWhitespace', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'abc';
    expect(normalizeWhitespace(text)).toEqual(result);
  });

  it('should work for normal sentense with too much spaces', () => {
    const text = 'Hello  world.   ';
    const result = 'Hello world.';
    expect(normalizeWhitespace(text)).toEqual(result);
  });

  it('should work for newlines', () => {
    const text = `Hello
    world`;
    const result = 'Hello world';
    expect(normalizeWhitespace(text)).toEqual(result);
  });
});
