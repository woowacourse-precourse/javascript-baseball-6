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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("메서드 유닛 테스트", () => {
  const game = new BaseballGame();

  test("getRandomNumbers 메서드", () => {
    for (let i = 0; i < 100; i++) {
      const numbers = game.getRandomNumbers();
      const numbersSet = new Set(numbers);
      expect(numbersSet.size === numbers.length).toBeTruthy();
    }
  });
});
