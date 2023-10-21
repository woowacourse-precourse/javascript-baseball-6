import BaseballGame from "../src/domain/BaseballGame";

describe('BaseballGame 도메인 테스트', () => {

  describe.each([
    { userInput: 123, computerInput: 456, result: { strike: 0, ball: 0 } },
    { userInput: 123, computerInput: 345, result: { strike: 0, ball: 1 } },
    { userInput: 123, computerInput: 214, result: { strike: 0, ball: 2 } },
    { userInput: 123, computerInput: 312, result: { strike: 0, ball: 3 } },
    { userInput: 123, computerInput: 134, result: { strike: 1, ball: 1 } },
    { userInput: 123, computerInput: 132, result: { strike: 1, ball: 2 } },
    { userInput: 123, computerInput: 123, result: { strike: 3, ball: 0 } },
  ])('.result($userInput, $computerInput)', ({ userInput, computerInput, result }) => {
    test(`strike: ${result.strike}, ball: ${result.ball} 반환`, () => {
      const baseballGame = new BaseballGame();
      const gameResult = baseballGame.result(userInput, computerInput);

      expect(gameResult).toEqual(result);
    });
  });
});
