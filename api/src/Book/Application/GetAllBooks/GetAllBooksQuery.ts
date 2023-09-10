export class GetAllBooksQuery {
  constructor(
    public limit: number,
    public offset: number,
  ) {}
}
