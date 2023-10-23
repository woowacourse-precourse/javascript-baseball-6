import BaseballGame from "../src/BaseballGame";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getPrintLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("메서드 유닛 테스트", () => {
  const game = new BaseballGame();

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

  test("handleUser 메서드 테스트", async () => {
    const testGame = new BaseballGame();

    testGame.setComputerNumbers([1, 2, 3]);

    const userInput = ["124", "134", "524", "123"];
    const messages = [
      "2스트라이크",
      "1볼 1스트라이크",
      "1스트라이크",
      "3스트라이크",
    ];
    const logSpy = getPrintLogSpy();

    mockQuestions(userInput);

    await testGame.handleUser();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });

  test("handleEnd 재시작 확인", async () => {
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
            async () => await game.handleEnd()
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
