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

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("게임 종료 후 종료 선택", async () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "2"];
    const logSpy = getLogSpy();
    const messages = ["3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("1볼 또는 2볼 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["213", "315", "135", "2"];
    const logSpy = getLogSpy();
    const messages = ["2볼", "2볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("중복된 숫자 입력 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["113"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("3자리가 아닌 숫자 입력 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("0 포함된 숫자 입력 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["130"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("알파벳이나 특수 문자를 포함한 입력 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["1a3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("공백을 포함한 입력 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["1 3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("너무 긴 입력 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["1234567890"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
