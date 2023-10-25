import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import IOManager from "../src/IOManager.js";
import AnswerManager from "../src/AnswerManager.js";

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

describe("AnswerManager 테스트", () => {
  let answerManager = null;

  beforeEach(() => {
    answerManager = AnswerManager.getInstance();
  });

  it("1~9 생성 테스트", () => {
    for (let i = 0; i < 100; i++) {
      const number = parseInt(answerManager.generateRandomNonZeroDigit());
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(9);
    }
  });

  it("답 제작 테스트", () => {
    answerManager.setAnswer();

    expect(answerManager.answer.length).toBe(answerManager.ANSWER_LENGTH);

    for (let eachNumber of answerManager.answer) {
      eachNumber = parseInt(eachNumber);
      expect(eachNumber).toBeGreaterThanOrEqual(1);
      expect(eachNumber).toBeLessThanOrEqual(9);
    }
  });

  it("볼, 스트라이크 개수 구하기 테스트", () => {
    answerManager.answer = "425";

    const inputs = ["123", "456", "789"];
    const outputs = [
      [0, 1],
      [1, 1],
      [0, 0],
    ];

    for (let idx in inputs) {
      expect(answerManager.getJudgedCountsFor(inputs[idx])).toEqual({
        ballCount: outputs[idx][0],
        strikeCount: outputs[idx][1],
      });
    }
  });
});

describe("IOManager 테스트", () => {
  let ioManager = null;

  beforeEach(() => {
    ioManager = IOManager.getInstance();
  });

  test("에러 출력 테스트", () => {
    expect(ioManager.throwError).toThrow("ERROR");
  });

  test("결과 출력 테스트", () => {
    const balls = [0, 1, 1, 0, 0, 3];
    const strikes = [0, 0, 1, 2, 3, 0];
    const outputs = [
      "낫싱",
      "1볼",
      "1볼 1스트라이크",
      "2스트라이크",
      "3스트라이크",
      "3볼",
    ];
    const logSpy = getLogSpy();

    for (let idx in outputs) {
      ioManager.printRoundResult({
        ballCount: balls[idx],
        strikeCount: strikes[idx],
      });
    }

    for (let output of outputs) {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    }
  });

  test("게임 재시작 입출력 테스트", async () => {
    const answers = ["1", "2"];
    const errorAnswers = ["3", "0", "b", ""];

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
  });

  test("숫자 입출력 테스트", async () => {
    const answers = ["123", "987"];
    const errorAnswers = ["a", "", "1234", "12", "1", "102"];

    mockQuestions(answers);
    for (let _ of answers) {
      await expect(ioManager.askNumber());
    }

    mockQuestions(errorAnswers);
    for (let _ of errorAnswers) {
      await expect(ioManager.askNumber()).rejects.toThrow("[ERROR]");
    }
  });
});

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
