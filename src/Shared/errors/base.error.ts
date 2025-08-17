// src/errors/base.error.ts
export abstract class BaseError extends Error {
  abstract readonly statusCode: number;
  abstract readonly errorCode: string;
  abstract readonly layer: string;

  constructor(message: string, public readonly cause?: Error) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export abstract class ServiceError extends BaseError {
  readonly layer = 'service';
}

export abstract class InfrastructureError extends BaseError {
  readonly layer = 'infrastructure';
}

export abstract class PresentationError extends BaseError {
  readonly layer = 'presentation';
}