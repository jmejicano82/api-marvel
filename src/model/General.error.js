"use strict";

class GeneralError extends Error {
  constructor(cause) {
    if (cause instanceof Error) {
      super(cause.message);
      this.cause = cause;
    } else super(cause);

    this.name = "GeneralError";
    this.customError = true;
  }
}

module.exports = GeneralError;
