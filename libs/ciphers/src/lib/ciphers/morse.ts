import { UnexpectedInputError } from '../errors/unexpected-input-error';
import { lowercase } from '../utils/lowercase';
import { normalizeWhitespace } from '../utils/normalize-whitespace';

const morseMap = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '-....',
};

export function morse(text: string) {
  const result = [];
  const input = lowercase(normalizeWhitespace(text));
  let index = 0;
  for (const char of input) {
    if (!char.match(/[A-Za-z0-9 .?!]/)) {
      throw new UnexpectedInputError(
        'Only latin characters, numbers and spaces are allowed.'
      );
    }

    if (char === ' ') {
      result.push('|');
    } else if (char.match(/[.?!]/)) {
      result.push('|');
    } else {
      result.push(morseMap[char]);
      result.push('|');
    }

    if (index === input.length - 1) {
      result.push('|');
    }

    index++;
  }
  return result.join('');
}
