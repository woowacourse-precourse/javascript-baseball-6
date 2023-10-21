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
});

describe("기능 단위 테스트", () => {
  test("1. 게임 시작 알림 기능 테스트", () => {
    const printSpy = getLogSpy();
    const app = new App();

    app.showStartMessage();
    expect(printSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("2. 랜덤 숫자 생성 테스트 (컴퓨터)", () => {
    const randoms = [1, 2, 2, 5, 9];
    mockRandoms(randoms);

    const app = new App();
    expect(app.setRandomNumber()).toEqual([1, 2, 5]);
  });

  test("4. 사용자에게 입력 받은 값 유효성 검사하기 (컴퓨터)", () => {
    const randoms = ["012", "a34", "56", "78910"];

    const app = new App();
    randoms.forEach((inputNumber) =>
      expect(() => app.userInputNumberValidation(inputNumber)).toThrow("잘못된 값 입력됨"),
    );
  });
});
