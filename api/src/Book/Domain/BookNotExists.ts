export class BookNotExists extends Error {
  constructor(id: string) {
    super(`Book ${id} does not exists`);
  }
}
