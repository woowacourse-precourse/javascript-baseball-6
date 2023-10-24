import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { LOGS } from "../src/lib/logs.js";

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
  test("게임 종료" , async() => {
    const randoms = [7, 1, 3];
    const answers = ["123", "145", "671", "216", "713", "2"];
    const logSpy = getLogSpy();
    const messages = ["1볼 1스트라이크", "1볼", "2볼", "1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  })

  test("예외 테스트2 : 유저 입력이 서로 다른 세 수가 아닐 때", async () => {
    // given
    const randoms = [5, 3, 2];
    const answers = ["333"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(LOGS.INVALID_INPUT1);
  });

  test("예외 테스트3 : 유저 입력이 자연수가 아닌 수가 포함된 경우", async () => {
    // given
    const randoms = [4, 3, 5];
    const answers = ["rr"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(LOGS.INVALID_INPUT1);
  });

  test("예외 테스트4 : 재시작 여부 물어볼 때 1 혹은 2가 아닐 경우", async () => {
    // given
    const randoms = [8, 3, 5];
    const answers = ["835", "r"];
    const logSpy = getLogSpy();
    const messages = ["3스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(LOGS.INPUT_PROMPT2);
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
