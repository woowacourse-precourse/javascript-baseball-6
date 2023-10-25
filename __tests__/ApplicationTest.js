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

  //예외테스트
  test("예외 테스트: 입력값이 4자리 이상인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });
  test("예외 테스트: 입력값이 2자리인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });
  test("예외 테스트: 입력값이 1자리인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });
  test("예외 테스트: 입력값이 공백인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = [" "];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });


});
