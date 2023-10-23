import AnswerGenerator from "../src/gameUtils/AnswerGenerator";
import AnswerValidator from "../src/gameUtils/AnswerValidator";

describe("AnswerGenerator 클래스 테스트", () => {
  test("getAnswer 함수를 가지고 있어야 한다.", () => {
    expect(typeof AnswerGenerator.getAnswer).toBe("function");
  });

  test("getAnswer 함수로 서로 다른 세자리 수를 반환해야 한다.", () => {
    const answer = AnswerGenerator.getAnswer();
    expect(AnswerValidator.validateAnswer(answer)).toBe(true);
  });
});
