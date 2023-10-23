import validation from "../src/Util/Validation";

describe("입력값 유효성 검사", () => {
  test("숫자 야구 입력값 정상", () => {
    expect(() => validation.checkBaseBallNumber("123")).not.toThrow();
  });
});