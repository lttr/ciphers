export function reverse(text: string) {
  const result = [];
  for (const char of text) {
    result.unshift(char);
  }
  return result.join('');
}
