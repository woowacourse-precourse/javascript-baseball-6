import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import IOManager from "../src/IOManager.js";

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

const getReadLineLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "readLineAsync");
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
});

describe("IOManager 테스트", () => {
  let ioManager = null;

  beforeEach(() => {
    ioManager = new IOManager();
  });

  test("에러 출력 테스트", async () => {
    expect(ioManager.throwError()).rejects.toThrow("[ERROR]");
  });

  test("결과 출력 테스트", () => {
    const balls = [0, 1, 1, 0, 0, 3];
    const strikes = [0, 0, 1, 2, 3, 0];
    const outputs = [
      "0볼 0스트라이크",
      "1볼 0스트라이크",
      "1볼 1스트라이크",
      "2스트라이크",
      "3스트라이크",
      "3볼",
    ];
    const logSpy = getLogSpy();

    for (let idx in outputs) {
      ioManager.printRoundResult({
        ballCount: balls[idx],
        strikeCsount: strikes[idx],
      });
    }

    for (let output of outputs) {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    }
  });

  test("게임 재시작 입출력 테스트", async () => {
    const MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ";
    const answers = ["1", "2"];
    const errorAnswers = ["3", "0", "b", ""];

    const readLineLogSpy = getReadLineLogSpy();

    // Valid inputs
    mockQuestions(answers);
    for (let answer of answers) {
      const result = await ioManager.askReplay();
      if (answer === "1") expect(result).toBe(true);
      else if (answer === "2") expect(result).toBe(false);
    }

    // Error
    mockQuestions(errorAnswers);
    for (let _ of answers) {
      await expect(ioManager.askReplay()).rejects.toThrow("[ERROR]");
    }

    // message logging
    expect(readLineLogSpy).toHaveBeenCalledWith(MESSAGE);
  });

  test("숫자 입출력 테스트", async () => {
    const MESSAGE = "숫자를 입력해주세요 : ";
    const errorAnswers = ["a", "", "1234", "12", "1", "102"];

    const readLineLogSpy = getReadLineLogSpy();

    mockQuestions(errorAnswers);
    for (let _ of errorAnswers) {
      await expect(ioManager.askNumber()).rejects.toThrow("[ERROR]");
    }

    expect(readLineLogSpy).toHaveBeenCalledWith(MESSAGE);
  });
});
