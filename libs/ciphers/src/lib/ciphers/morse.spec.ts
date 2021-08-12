import { morse } from './morse';

describe('morse', () => {
  it('should work for lowercase letters', () => {
    const text = 'abc';
    const result = '.-|-...|-.-.||';
    expect(morse(text)).toEqual(result);
  });

  it('should work for uppercase letters', () => {
    const text = 'ABC';
    const result = '.-|-...|-.-.||';
    expect(morse(text)).toEqual(result);
  });

  it('should work for a sentence', () => {
    const text = 'Hello world.';
    const result = '....|.|.-..|.-..|---||.--|---|.-.|.-..|-..|||';
    expect(morse(text)).toEqual(result);
  });

  it('should work for a sentence with extra whitespace', () => {
    const text = 'Hello   world. ';
    const result = '....|.|.-..|.-..|---||.--|---|.-.|.-..|-..|||';
    expect(morse(text)).toEqual(result);
  });

  it('should work for two sentences', () => {
    const text = 'Hello world! Bye.';
    const result =
      '....|.|.-..|.-..|---||.--|---|.-.|.-..|-..|||-...|-.--|.|||';
    expect(morse(text)).toEqual(result);
  });

  it('should throw error when unexpected character occurs', () => {
    const text = 'a@';
    expect(() => morse(text)).toThrowError();
  });
});
