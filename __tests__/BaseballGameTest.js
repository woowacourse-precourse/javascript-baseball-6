import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
    test("중복된 숫자 입력 예외 테스트", async () => {
        mockRandoms([1, 3, 5]);
        mockQuestions(['113']);
      
        const app = new App();
        await expect(app.play()).rejects.toThrow("[ERROR]");
      });
      
      
      test("범위를 벗어난 숫자 입력 예외 테스트", async () => {
        mockRandoms([1, 3, 5]);
        mockQuestions(['7890']);
      
        const app = new App();
        await expect(app.play()).rejects.toThrow("[ERROR]");
      });
      
      
      test("문자나 특수 문자 입력 예외 테스트", async () => {
        mockRandoms([1, 3, 5]);
        mockQuestions(['0x$']);
      
        const app = new App();
        await expect(app.play()).rejects.toThrow("[ERROR]");
      });
      
      
      test("게임 종료 선택 예외 테스트", async () => {
        mockRandoms([1, 3, 5]);
        const answers = ["135", "3"];
        mockQuestions(answers);
      
        const app = new App();
        await expect(app.play()).rejects.toThrow("[ERROR]");
      });
  });
  