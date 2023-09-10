import { GetBookQuery } from '../../../Book/Application/GetBook/GetBookQuery';
import { UuidMother } from '../../Shared/Domain/UuidMother';

export class GetBookQueryMother {
  static create = (id?: string) => {
    return new GetBookQuery(id ?? UuidMother.create());
  };
}
