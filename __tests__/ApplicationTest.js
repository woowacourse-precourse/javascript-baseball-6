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

  test("게임 종료 후 재시작 후 재시작", async () => {
    const randoms = [1, 3, 5, 5, 8, 9, 2, 4, 6];
    const answers = [
      "246",
      "135",
      "1",
      "597",
      "589",
      "1",
      "123",
      "456",
      "246",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "1볼",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

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
  test("예외 테스트2", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = [1.1, 2, 3];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트3", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["2234"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트4", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["0123"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트5", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["00123"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트6", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["12"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트7", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["9", "8", 12];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트8", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["9", "8", "7"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트9", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = [1344];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트10", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = [992];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트11", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["a12"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트12", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["1b2"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트13", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["9_8"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트14", async () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["910"];
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
