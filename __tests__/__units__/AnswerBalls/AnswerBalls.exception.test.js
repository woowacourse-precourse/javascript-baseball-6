import { ERROR_MESSAGE } from '../../../src/constants/error';
import { AnswerBalls, TargetBall } from '../../../src/domain';

describe('AnswerBalls 예외 테스트', () => {
  it.each([
    { input: 1 },
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: true },
    { input: {} },
  ])('`contains` 메서드의 인자가 `TargetBall`가 아니라면 에러를 발생시킨다.', ({ input }) => {
    expect(() => {
      // given
      const answer = new AnswerBalls([1, 2, 3]);

      // when
      answer.contains(input);

      // then
    }).toThrow(ERROR_MESSAGE.ANSWER_BALLS.invalidContainsArgs);
  });

  it.each([
    { input: 1 },
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: true },
    { input: {} },
  ])(
    '`match` 메서드의 `targetBall` 인자가 `TargetBall`이 아니라면 에러를 발생시킨다.',
    ({ input }) => {
      expect(() => {
        // given
        const answer = new AnswerBalls([1, 2, 3]);

        // when
        answer.match(input);

        // then
      }).toThrow(ERROR_MESSAGE.ANSWER_BALLS.invalidMatchArgs);
    },
  );

  it.each([
    { input: -1 },
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: true },
    { input: {} },
  ])(
    '`match` 메서드의 `index` 인자가 올바른 index값이 아니라면 에러를 발생시킨다.',
    ({ input }) => {
      expect(() => {
        // given
        const answer = new AnswerBalls([1, 2, 3]);
        const ball = TargetBall.valueOf(1);

        // when
        answer.match(ball, input);

        // then
      }).toThrow(ERROR_MESSAGE.ANSWER_BALLS.INVALID_MATCH_INDEX_ARG);
    },
  );
});
