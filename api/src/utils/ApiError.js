class ApiError extends Error {
  constructor(
    statusCode,
    message = "Somthing went wrong",
    errors = [],
    status = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (status) {
      this.status = status;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
