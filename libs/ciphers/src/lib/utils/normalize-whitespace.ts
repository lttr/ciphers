export function normalizeWhitespace(text: string) {
  return text.trim().replace(/\p{White_Space}+/gu, ' ');
}
