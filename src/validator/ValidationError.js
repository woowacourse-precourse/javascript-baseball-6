import MESSAGE from "../constants/message.js";

class ValidationError extends Error {
  constructor(message) {
    super(MESSAGE.ERROR.PREFIX + message);
    this.name = "ValidationError";
  }
}

export default ValidationError;