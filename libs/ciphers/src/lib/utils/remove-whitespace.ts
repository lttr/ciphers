export function removeWhitespace(text: string) {
  return text.replace(/\p{White_Space}/gu, '');
}
