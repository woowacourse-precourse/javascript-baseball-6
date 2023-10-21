import BaseballGame from "../src/BaseballGame";
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

const getPrintLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("메서드 유닛 테스트", () => {
  const game = new BaseballGame();

  const getRestartLogSpy = () => {
    const logSpy = jest.spyOn(game, "playGame");
    logSpy.mockClear();
    return logSpy;
  };

  test("getRandomNumbers 메서드", () => {
    for (let i = 0; i < 100; i++) {
      const numbers = game.getRandomNumbers();
      const numbersSet = new Set(numbers);
      expect(numbersSet.size === numbers.length).toBeTruthy();
    }
  });

  test("handleUserInput 메서드 에러", async () => {
    const answers = [
      "1234",
      "1239",
      "q12",
      "45z",
      "44z",
      "z123",
      "7899",
      "799",
    ];
    const messages = [
      "[ERROR] 입력한 값은 3자리가 아닙니다.",
      "[ERROR] 입력한 값은 3자리가 아닙니다.",
      "[ERROR] 입력한 값에 숫자가 아닌 값이 있습니다.",
      "[ERROR] 입력한 값에 숫자가 아닌 값이 있습니다.",
      "[ERROR] 입력한 값에 숫자가 아닌 값이 있습니다.",
      "[ERROR] 입력한 값은 3자리가 아닙니다.",
      "[ERROR] 입력한 값은 3자리가 아닙니다.",
      "[ERROR] 입력한 값에 중복이 있습니다.",
    ];

    mockQuestions(answers);

    for (const message of messages) {
      await expect(game.handleUserInput()).rejects.toThrow(message);
    }
  });

  test("handleUserInput 메서드 패스", async () => {
    const answers = ["123", "456", "789", "987", "734", "931"];

    mockQuestions(answers);

    answers.forEach(async () => {
      await expect(game.handleUserInput()).resolves.not.toThrow();
    });
  });

  test("handleUserResult 메서드 출력", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 9, 5, 1, 9, 5, 1];
    const userNumbers = [
      [1, 2, 3],
      [4, 6, 5],
      [9, 5, 1],
      [2, 4, 6],
    ];
    const messages = ["3스트라이크", "2볼 1스트라이크", "3스트라이크", "낫싱"];
    mockRandoms(randoms);
    mockQuestions(messages);
    const logSpy = getPrintLogSpy();

    messages.forEach((message, index) => {
      game.setComputerNumbers();
      game.setUserNumbers(userNumbers[index]);
      const result = game.handleUserResult();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
      if (index % 2 === 0) expect(result).toBeFalsy();
      if (index % 2 === 1) expect(result).toBeTruthy();
    });
  });

  test("endGame 재시작 확인", async () => {
    async function endGameTest(answers) {
      mockQuestions(answers);

      const numberOfEndGameCalled = answers.length;
      const numberOfPlayGameCalled = answers.filter((v) => v === "1").length;
      const isNotCallError = answers.every(
        (answer) => answer === "1" || answer === "2"
      );
      game.playGame = jest.fn().mockResolvedValue();
      const test = async () => {
        await Promise.all(
          Array.from(
            { length: numberOfEndGameCalled },
            async () => await game.endGame()
          )
        );
      };

      if (isNotCallError) {
        await test();
        expect(game.playGame).toHaveBeenCalledTimes(numberOfPlayGameCalled);
      } else await expect(test()).rejects.toThrow("[ERROR]");
    }

    await endGameTest(["1", "2", "1", "1", "2"]);
    await endGameTest(["1", "123", "111"]);
    await endGameTest(["1", "2", "123", "q", "2"]);
  });
});
