class Message {
  /* 조건에 따라 error 메시지를 던진다. */
  static logIf(condition, message) {
    if (condition) {
      throw new Error(`[ERROR] ${message}`);
    }
  }
}

export default Message;
