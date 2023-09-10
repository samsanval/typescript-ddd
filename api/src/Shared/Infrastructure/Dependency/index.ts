import { container } from 'tsyringe';
import { ObjectionBookRepository } from '../../../Book/Infrastructure/Persistence/ObjectionBookRepository';

export default function createDependencies() {
  container.register('bookRepository', {
    useClass: ObjectionBookRepository,
  });
}
