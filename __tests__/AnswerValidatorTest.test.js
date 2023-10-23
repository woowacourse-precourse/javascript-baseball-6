import AnswerValidator from "../src/gameUtils/AnswerValidator";

describe("AnswerValidator 클래스 테스트", () => {
  test("서로 다른 3자리 숫자인지 확인한다.", () => {
    const temp = ["123", "456", "789", "111", "107", "1", "10", "1", "1564"];
    const result = temp.map((number) => {
      return AnswerValidator.validateAnswer(number);
    });
    expect(result).toEqual([true, true, true, false, false, false, false, false, false]);
  });
});
