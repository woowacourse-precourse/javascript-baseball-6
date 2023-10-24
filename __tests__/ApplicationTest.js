import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    if (input === "1" || input === "2") {
      // 게임 종료 후 1 또는 2를 입력받을 경우, 유효한 입력으로 처리한다.
      return Promise.resolve(input);
    }
    if (!/^\d{3}$/.test(input)) {
      // 입력값이 숫자가 아닌 경우 오류를 던진다.
      return Promise.reject(
        new Error("[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다.")
      );
    }
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
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

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

  test("예외 테스트 - 입력한 수가 3자리의 수가 아닐 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다."
    );
  });

  test("예외 테스트 - 숫자가 아닌 자료형을 엽력한 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["ㄱㄴㄷ"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다."
    );
  });
});
