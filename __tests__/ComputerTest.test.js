import Computer from "../src/domain/Computer";
import AnswerGenerator from "../src/gameUtils/AnswerGenerator";
import AnswerValidator from "../src/gameUtils/AnswerValidator";

AnswerGenerator.getAnswer = jest.fn();

let computer;
describe("Comupter 클래스 테스트", () => {
  beforeEach(() => {
    computer = new Computer();
    computer.answer = "486";
  });
  test("getAnswer 함수를 가지고 있어야 한다.", () => {
    expect(typeof computer.getAnswer).toBe("function");
  });

  test("getAnswer 함수는 this.answer 값을 반환해야 한다.", () => {
    expect(computer.getAnswer()).toBe("486");
  });

  test("setAnswer 함수를 가지고 있어야 한다.", () => {
    expect(typeof computer.setAnswer).toBe("function");
  });

  test("setAnswer에서 AnswerGenerator.getAnwer 함수를 호출해야 한다.", () => {
    computer.setAnswer();
    expect(AnswerGenerator.getAnswer).toBeCalled();
  });
});
