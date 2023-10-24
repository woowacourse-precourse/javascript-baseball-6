import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

function hasDuplicates(input) {
  const seen = {};

  for (let i = 0; i < input.length; i++) {
    if (seen[input[i]]) {
      return true; // 중복 발견
    }
    seen[input[i]] = true;
  }

  return false; // 중복 없음
}
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    if (input === "1" || input === "2") {
      return Promise.resolve(input);
    }
    if (input && input.length < 3 && input !== "1" && input !== "2") {
      return Promise.reject(
        new Error("[ERROR] 재시작 여부는 1 또는 2를 입력해야 합니다.")
      );
    }
    if (input && hasDuplicates(input)) {
      return Promise.reject(
        new Error(
          "[ERROR] 숫자 야구는 서로 다른 3자리의 숫자만 입력할 수 있습니다."
        )
      );
    }
    if (!/^\d{3}$/.test(input)) {
      return Promise.reject(
        new Error("[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다.")
      );
    }
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
  test("컴퓨터는 서로 다른 3개의 다른 랜덤한 수를 선택한다.", () => {
    // given
    const randomNumbers = [1, 2, 3];
    const mockRandom = jest.fn();
    randomNumbers.forEach((number) => {
      mockRandom.mockReturnValueOnce(number);
    });

    MissionUtils.Random.pickNumberInRange = mockRandom;

    const app = new App();

    // when
    const computerNumbers = app.generateComputerNumbers();
    const uniqueNumbers = new Set(computerNumbers);

    // then
    expect(computerNumbers).toEqual([1, 2, 3]);
    expect(uniqueNumbers.size).toBe(3);
  });

  test("게임 종료 후 재시작", async () => {
    // given
    const randoms = [1, 3, 5, 5, 8, 9, 7, 4, 1];
    const answers = ["246", "135", "1", "597", "589", "1", "417", "741", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "3볼",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
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

  test("2를 입력시 게임 종료 문구를 출력하는가?", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["135", "2"];
    const logSpy = getLogSpy();
    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    const lastLogCall = logSpy.mock.calls[logSpy.mock.calls.length - 1][0];
    expect(lastLogCall).toEqual(expect.stringContaining("게임 종료"));
  });

  test("예외 테스트 - 중복된 숫자 입력", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["779"];
    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR] 숫자 야구는 서로 다른 3자리의 숫자만 입력할 수 있습니다."
    );
  });

  test("예외 테스트 - 잘못된 재시작 여부 입력", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["135", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR] 재시작 여부는 1 또는 2를 입력해야 합니다."
    );
  });

  test("예외 테스트 - 입력한 수가 3자리의 수가 아닐 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다."
    );
  });

  test("예외 테스트 - 숫자가 아닌 자료형을 엽력한 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["ㄱㄴㄷ"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다."
    );
  });
});
