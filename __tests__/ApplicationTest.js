import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const INPUT = inputs.shift();
    return Promise.resolve(INPUT);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const LOG_SP = jest.spyOn(MissionUtils.Console, "print");
  LOG_SP.mockClear();
  return LOG_SP;
};

describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", async () => {
    // given
    const RANDOMS = [1, 3, 5, 5, 8, 9];
    const ANSWERS = ["246", "135", "1", "597", "589", "2"];
    const LOG_SPY = getLogSpy();
    const MESSAGES = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(RANDOMS);
    mockQuestions(ANSWERS);

    // when
    const APP_INSTANCE = new App();
    await expect(APP_INSTANCE.play()).resolves.not.toThrow();

    // then
    MESSAGES.forEach((output) => {
      expect(LOG_SPY).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", async () => {
    // given
    const RANDOMS = [1, 3, 5];
    const ANSWERS = ["1234"];

    mockRandoms(RANDOMS);
    mockQuestions(ANSWERS);

    // when & then
    const APP_INSTANCE = new App();

    await expect(APP_INSTANCE.play()).rejects.toThrow("[ERROR]");
  });
});
