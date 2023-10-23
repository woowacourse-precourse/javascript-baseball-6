import GameAnalyzer from "../src/models/GameAnalyzer";

describe('GameAnalyzer', () => {
  const testCases = [
    { computerNumber: 123, userNumber: 132, expected: { ball: 2, strike: 1 } },
    { computerNumber: 123, userNumber: 456, expected: { ball: 0, strike: 0 } },
    { computerNumber: 123, userNumber: 123, expected: { ball: 0, strike: 3 } },
    { computerNumber: 123, userNumber: 345, expected: { ball: 1, strike: 0 } },
  ];

  test.each(testCases)('볼과 스트라이크 유효성 테스트', ({ computerNumber, userNumber, expected }) => {
    const result = GameAnalyzer.getBallAndStrike(computerNumber, userNumber);
    expect(result).toEqual(expected);
  });
});