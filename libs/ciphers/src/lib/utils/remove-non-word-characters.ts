// Source https://github.com/jprichardson/string.js/blob/master/lib/string.js

export function removeNonWordCharacters(text: string) {
  return text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
}
