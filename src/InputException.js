class InputException extends TypeError {
  constructor(errorMessage, specificMessage) {
    super(errorMessage);

    Error.captureStackTrace(this, InputException);

    this.name = 'InputException';
    this.message = `${this.message} : ${specificMessage}`;
  }
}

export default InputException;
