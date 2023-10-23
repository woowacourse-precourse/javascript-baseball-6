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

  test("빈칸 포함 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1 3 5"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 3자리의 수를 공백없이 이어서 입력해야 합니다.');
  });

  test("3자리가 아닌 입력 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 3자리의 숫자가 아닙니다.');
  });

  test("중복 숫자 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["121"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 각 자리의 수는 중복되지 않아야 합니다.');
  });

  test("숫자 이외 입력 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["-b?"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력에는 숫자만 포함되어야 합니다.');
  });

  test("0 포함 입력 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["120"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력에는 0이 포함되지 않아야 합니다.');
  });
});
