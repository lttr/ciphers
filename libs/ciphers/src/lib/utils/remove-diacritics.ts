// Source https://stackoverflow.com/a/37511463

export function removeDiacritics(text: string) {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}
