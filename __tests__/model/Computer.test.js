import { BaseballMaker, Computer } from '../../src/model/index.js';

describe('Computer 테스트', () => {
  beforeAll(() => {
    BaseballMaker.prototype.createBaseball = () => [3, 4, 5];
  });

  test.each([
    {
      input: [1, 2, 6],
      output: {
        strike: 0,
        ball: 0,
      },
    },
    {
      input: [1, 2, 3],
      output: {
        strike: 0,
        ball: 1,
      },
    },
    {
      input: [4, 3, 6],
      output: {
        strike: 0,
        ball: 2,
      },
    },
    {
      input: [5, 3, 4],
      output: {
        strike: 0,
        ball: 3,
      },
    },
    {
      input: [3, 1, 9],
      output: {
        strike: 1,
        ball: 0,
      },
    },
    {
      input: [3, 4, 9],
      output: {
        strike: 2,
        ball: 0,
      },
    },
    {
      input: [3, 4, 5],
      output: {
        strike: 3,
        ball: 0,
      },
    },
    {
      input: [3, 1, 4],
      output: {
        strike: 1,
        ball: 1,
      },
    },
    {
      input: [3, 5, 4],
      output: {
        strike: 1,
        ball: 2,
      },
    },
  ])(
    '플레이어가 선택한 야구공 $input과 비교한 결과는 $output.strike스트라이크 $output.ball볼 이다.',
    ({ input, output }) => {
      // given
      const computer = new Computer();
      // when
      const { strike, ball } = computer.comparePlayerBaseball(input);
      // then
      expect(strike).toBe(output.strike);
      expect(ball).toBe(output.ball);
    },
  );
});
