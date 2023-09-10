import { DateTime } from 'luxon';

export class Utils {
  static toISODate(date: Date): string {
    return <string>DateTime.fromJSDate(date).toISODate();
  }
}
