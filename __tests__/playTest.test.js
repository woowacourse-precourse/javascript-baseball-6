import App from "../src/App";
import InputProcessor from "../src/interface/InputProcessor";
import OutputProcessor from "../src/interface/OutputProcessor";
let app;

OutputProcessor.output = jest.fn();
InputProcessor.answerInput = jest.fn();

describe("play 함수 테스트", () => {
  beforeEach(() => {
    app = new App();
  });

  test("play 함수를 가지고 있어야 한다.", () => {
    expect(typeof app.play).toBe("function");
  });

  test("OutputProcessor.output 함수를 시작 문구와 함께 호출해야 한다.", async () => {
    await app.play();
    expect(OutputProcessor.output).toBeCalledWith("숫자 야구 게임을 시작합니다.");
  });

  // test("InputProcessor.answer 함수를 호출해야 한다.", () => {
  //   expect(InputProcessor.answerInput).toBeCalled();
  // });
});
