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

describe("숫자 야구 게임 통합 테스트", () => {
  async function passTest({ randoms, answers, messages }) {
    const logSpy = getLogSpy();
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  }

  async function errorTest({ randoms, answers }) {
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  }

  test("통합 테스트 통과1", async () => {
    const randoms = [5, 9, 9, 4];
    const answers = ["594", "2"];
    const messages = ["3스트라이크", "게임 종료"];
    passTest({ randoms, answers, messages });
  });

  test("통합 테스트 통과2", async () => {
    const randoms = [5, 2, 3, 1, 9, 1, 4];
    const answers = [
      "524",
      "124",
      "521",
      "523",
      "1",
      "123",
      "124",
      "924",
      "194",
      "2",
    ];
    const messages = [
      "2스트라이크",
      "1스트라이크",
      "2스트라이크",
      "3스트라이크",
      "1스트라이크",
      "2스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];
    passTest({ randoms, answers, messages });
  });
  test("통합 테스트 통과3", async () => {
    const randoms = [1, 2, 4, 9, 9, 9, 8, 7];
    const answers = ["123", "124", "1", "123", "456", "789", "897", "987", "2"];
    const messages = [
      "2스트라이크",
      "3스트라이크",
      "낫싱",
      "낫싱",
      "2볼 1스트라이크",
      "2볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];
    passTest({ randoms, answers, messages });
  });

  test("통합 테스트 에러1", async () => {
    const randoms = [5, 9, 4];
    const answers = ["599"];

    await errorTest({ randoms, answers });
  });
  test("통합 테스트 에러2", async () => {
    const randoms = [1, 2, 3];
    const answers = ["123", "q"];

    await errorTest({ randoms, answers });
  });
  test("통합 테스트 에러3", async () => {
    const randoms = [1, 2, 3];
    const answers = ["1245"];

    await errorTest({ randoms, answers });
  });
});
