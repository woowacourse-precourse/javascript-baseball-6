import InputValidator from "../src/models/InputValidator";

describe('InputValidator', () => {
  const testCases = [
    ['123', true],
    ['12a', false],
    ['a12', false],
    ['aAㄱ', false],
    ['103', false],
    ['', false],
    ['1223', false],
    ['1 3', false],
    ['-12', false],
  ];

  test.each(testCases) ('입력값 유효성 테스트', (input, expected) => {
    const result = InputValidator.hasValidNumber(input);
    expect(result).toBe(expected);
  });
});