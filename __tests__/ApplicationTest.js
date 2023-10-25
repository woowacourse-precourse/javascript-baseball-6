import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import BaseBallGame from "../src/model/BaseballGame.js";
import { ERROR_MESSAGE } from "../src/utils/constants.js";
import { pickNumberInRange, printMessage, readLineAsync, throwError } from "../src/utils/index.js";

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
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

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
});

describe("숫자 입력 테스트", () => {
  const randoms = [1, 2, 3];

  beforeEach(() => {
    mockRandoms(randoms);
  });

  test("성공", async () => {
    const answers = ["123"];

    mockQuestions(answers);

    const app = new App();

    await expect(app.getUserNumbers()).resolves.toEqual([1, 2, 3]);
  });

  test("실패 - 숫자가 아닐 경우", async () => {
    const answers = ["1q2"];

    mockQuestions(answers);

    const app = new App();

    await expect(app.getUserNumbers()).rejects.toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test("실패 - 3자리가 아닐 경우", async () => {
    const answers = ["1234"];

    mockQuestions(answers);

    const app = new App();

    await expect(app.getUserNumbers()).rejects.toThrow(ERROR_MESSAGE.NOT_THREE_DIGITS);
  });

  test("실패 - 중복된 숫자가 존재할 경우", async () => {
    const answers = ["232"];

    mockQuestions(answers);

    const app = new App();

    await expect(app.getUserNumbers()).rejects.toThrow(ERROR_MESSAGE.NOT_UNIQUE);
  });

  test("실패 - 1 ~ 9사이의 숫자가 아닐 경우", async () => {
    const answers = ["012"];

    mockQuestions(answers);

    const app = new App();

    await expect(app.getUserNumbers()).rejects.toThrow(ERROR_MESSAGE.NOT_RANGE);
  });
});

describe("게임 재시작 여부 테스트", () => {
  test("성공 - 재시작", async () => {
    const answers = ["1"];

    mockQuestions(answers);

    const app = new App();

    await expect(app.confirmRestart()).resolves.toBe(true);
  });

  test("성공 - 종료", async () => {
    const answers = ["2"];

    mockQuestions(answers);

    const app = new App();

    await expect(app.confirmRestart()).resolves.toBe(false);
  });

  test("실패 - 잘못된 입력", async () => {
    const answers = ["3", "test", "@##$%!", "한글"];
    const len = answers.length;

    mockQuestions(answers);

    const app = new App();

    for (let i = 0; i < len; i++) {
      await expect(app.confirmRestart()).rejects.toThrow(ERROR_MESSAGE.NOT_RESTART_OR_END);
    }
  });
});

describe("BaseballGame class", () => {
  const props = { min: 1, max: 9, maxInputLength: 3 };
  const scores = [
    { strike: 0, ball: 0 },
    { strike: 1, ball: 2 },
    { strike: 3, ball: 0 },
  ];

  test("랜덤 숫자 생성", () => {
    const randoms = [1, 2, 3];

    mockRandoms(randoms);

    const game = new BaseBallGame();

    expect(game.generateRandomNumbers(props)).toEqual([1, 2, 3]);
  });

  test("스트라이크 볼 계산", () => {
    const randoms = [1, 2, 3];
    mockRandoms(randoms);

    const answers = [
      [4, 5, 6],
      [1, 3, 2],
      [1, 2, 3],
    ];

    const game = new BaseBallGame();
    game.init(props);

    answers.forEach((answer, i) => {
      expect(game.calculateStrikeBall(answer)).toEqual(scores[i]);
    });
  });
});

describe("유틸 함수 테스트", () => {
  test("printMessage", () => {
    const logSpy = getLogSpy();
    const message = "printMessage";

    printMessage(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("readLineAsync", async () => {
    const answer = "readLineAsync";

    mockQuestions([answer]);

    const result = await readLineAsync();

    expect(result).toEqual(answer);
  });

  test("pickNumberInRange", () => {
    const randoms = [1, 2, 3];

    mockRandoms(randoms);

    randoms.forEach((random) => {
      const result = pickNumberInRange(1, 3);

      expect(result).toEqual(random);
    });
  });

  test("throwError", () => {
    const message = "throwError";

    expect(() => throwError(message)).toThrow(message);
    expect(() => throwError(message, false)).not.toThrow(message);
  });
});