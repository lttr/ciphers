export class UnexpectedInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnexpectedInputError';
  }
}
