import { removeWhitespace } from './remove-whitespace';

describe('removeWhitespace', () => {
  it('should work for english characters', () => {
    const text = 'abc';
    const result = 'abc';
    expect(removeWhitespace(text)).toEqual(result);
  });

  it('should work for normal sentense', () => {
    const text = 'Hello world.';
    const result = 'Helloworld.';
    expect(removeWhitespace(text)).toEqual(result);
  });

  it('should work for newlines', () => {
    const text = `Hello
    world`;
    const result = 'Helloworld';
    expect(removeWhitespace(text)).toEqual(result);
  });
});
