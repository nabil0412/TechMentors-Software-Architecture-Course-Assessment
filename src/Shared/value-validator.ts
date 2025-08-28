import mongoose from 'mongoose';

export class ValueValidator {
  static isEmpty(value: string) {
    return !value || value.trim().length === 0;
  }

  static isString(value) {
    return  (typeof value === 'string') 
  }

  static isValidMongooseId(id: string) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  static isValidDateISOString(dateStr: string): boolean {
    const isoRegex =
      /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?$/;

    if (!isoRegex.test(dateStr)) return false;

    const date = new Date(dateStr);
    return !isNaN(date.getTime());
  }
}
