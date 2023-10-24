import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import BaseballGame from '../src/BaseballGame.js';

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
  test("게임 종료 후 재시작", async () => {
    // given
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("App.getResultMessage 테스트", () => {
    const app = new App();
  
    expect(app.getResultMessage(2, 0)).toBe("2볼");
    expect(app.getResultMessage(0, 2)).toBe("2스트라이크");
    expect(app.getResultMessage(1, 2)).toBe("1볼 2스트라이크");
    expect(app.getResultMessage(0, 0)).toBe("낫싱");
  });

  test("BaseballGame.getRandomNumber 테스트", () => {
    const randoms = [1, 2, 3, 3, 3, 8, 3, 8, 5];
    mockRandoms(randoms);
  
    expect(BaseballGame.getRandomNumber()).toEqual([1, 2, 3]);
    expect(BaseballGame.getRandomNumber()).toEqual([3, 8, 5]);
  });
});
