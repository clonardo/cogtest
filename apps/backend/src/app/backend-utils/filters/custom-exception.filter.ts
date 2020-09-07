import {
  ExceptionFilter,
  Catch,
  HttpStatus,
  ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidationError } from 'class-validator';
import { JsonWebTokenError } from 'jsonwebtoken';
import { CustomValidationError } from '../exceptions';

/**
 * Catch errors in JWT, validation, syntax, and more
 */
@Catch(SyntaxError, CustomValidationError, JsonWebTokenError, Error)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(
    exception: CustomValidationError | JsonWebTokenError,
    host: ArgumentsHost
  ) {
    const errors = {};
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof CustomValidationError) {
      exception.errors.forEach((error: ValidationError) => {
        Object.keys(error.constraints).forEach((key: string) => {
          if (!errors[error.property]) {
            errors[error.property] = [];
          }
          errors[error.property].push(error.constraints[key]);
        });
      });
      console.log('-- throwing CustomValidationError');
      response.status(HttpStatus.BAD_REQUEST).json(errors);
      return;
    }
    if (exception instanceof JsonWebTokenError) {
      console.log('-- throwing JsonWebTokenError');
      response.status(HttpStatus.BAD_REQUEST).json({
        nonFieldErrors: [exception.message],
      });
      return;
    }
    if (process.env.DEBUG === 'true' || process.env.DEBUG === '1') {
      console.error(exception);
      console.log('-- breaking on debug');
      response
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: String(exception) });
      return;
    }
    console.log('-- falling back to BAD_REQUEST on exception ', exception);
    response.status(HttpStatus.BAD_REQUEST).json(exception);
  }
}
