import { Computer } from '../src/Model/Computer.js';

describe('Computer Class', () => {
  describe.only('유저의 BaseballNumber가 입력되면,', () => {
    const mockCases = [
      { answer: 123, userNumber: 123, expected: { ball: 0, strike: 3 } },
      { answer: 123, userNumber: 456, expected: { ball: 0, strike: 0 } },
      { answer: 123, userNumber: 124, expected: { ball: 0, strike: 2 } },
      { answer: 123, userNumber: 132, expected: { ball: 2, strike: 1 } },
      { answer: 123, userNumber: 321, expected: { ball: 2, strike: 1 } },
    ];

    test('정답과 비교해 결과(strike, ball)를 반환한다.', () => {
      mockCases.forEach(({ answer, userNumber, expected }) => {
        const computer = new Computer(answer);
        const result = computer.compareNumber(userNumber);

        expect(result).toEqual(expected);
      });
    });
  });
});
