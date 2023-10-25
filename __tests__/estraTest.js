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

describe("숫자 야구 게임 추가 테스트", () => {
  test("게임 종료 후 재시작(Extra)", async () => {
    // given
    const randoms = [5, 4, 9, 2, 5, 3, 4, 1, 6];
    const answers = [
      "458",
      "149",
      "549",
      "1",
      "253",
      "1",
      "641",
      "461",
      "416",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "2볼",
      "2스트라이크",
      "3스트라이크",
      "3스트라이크",
      "3볼",
      "2볼 1스트라이크",
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

  test("예외 테스트 (자릿수 ERROR)", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]세자리만 입력 가능합니다."
    );
  });

  test("예외 테스트 (중복 ERROR)", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]중복된 숫자가 존재합니다."
    );
  });

  test("예외 테스트 (타입 ERROR)", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["12ㅋ"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]숫자만 입력이 가능합니다."
    );
  });

  test("예외 테스트 (재시작 입력 ERROR)", async () => {
    // given
    const randoms = [1, 2, 3];
    const answers = ["123", "4"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]1 혹은 2를 입력해주세요.");
  });
});
