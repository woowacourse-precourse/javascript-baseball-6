import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { errorMessages } from "../src/constants/errorMessages.js";

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
  test("한 게임 플레이", async () => {
    const randoms = [6, 4, 8];
    const answers = ["123", "345", "456", "621", "468", "645", "648", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1스트라이크",
      "2볼",
      "1스트라이크",
      "2볼 1스트라이크",
      "2스트라이크",
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

  test("재시작 테스트", async () => {
    const randoms = [...Array(11).fill([1, 2, 3])].flat();
    const answers = [...Array(10).fill(["123", "1"]), "123", "2"].flat();
    const logSpy = getLogSpy();
    const messages = [
      ...Array(10).fill("3스트라이크"),
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

  test("중복 숫자에 관한 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(errorMessages.HAVE_DUPLICATION);
  });

  test("타입에 관한 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["asd"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(errorMessages.NOT_A_NUMBER);
  });

  test("공백 포함에 관한 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = [" 12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(errorMessages.NOT_MATCH_LENGTH);
  });

  test("게임 종료 후 입력값 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["135", "a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      errorMessages.NOT_MATCH_END_OR_RESTART
    );
  });
});
