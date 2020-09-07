import { ValidationError } from 'class-validator';

/**
 * Throw when validation fails
 */
export class CustomValidationError extends Error {
  errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super();
    this.errors = errors;
  }
}
