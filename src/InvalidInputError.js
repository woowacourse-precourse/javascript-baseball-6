class InvalidInputError extends Error {
  constructor() {
    super("잘못된 입력입니다.");
    this.name = "InvalidInputError";
  }
}

export default InvalidInputError;
