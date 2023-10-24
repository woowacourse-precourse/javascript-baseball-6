import { AnswerBalls, TargetBall, TargetBalls } from '../../../src/domain';

describe('AnswerBalls 테스트', () => {
  it.each([
    { input: [1, 2, 3] },
    { input: [1, 2, 4] },
    { input: [5, 1, 2] },
    { input: [7, 8, 9] },
    { input: [1, 4, 9] },
  ])('입력받은 배열에 따라 `targetBalls` 필드에 `TargetBalls`를 가진다.', ({ input }) => {
    const answer = AnswerBalls.of(input);
    expect(answer.getTargetBalls()).toEqual(TargetBalls.of(input));
  });

  it.each([
    { input: [1, 2, 3], target: 1, result: true },
    { input: [1, 2, 4], target: 2, result: true },
    { input: [2, 1, 5], target: 5, result: true },
    { input: [7, 8, 9], target: 1, result: false },
    { input: [1, 4, 9], target: 3, result: false },
  ])(
    '`contains` 메서드는 입력받은 `TargetBall`을 `balls`에 소유하고 있는지 판별한다.',
    ({ input, target, result }) => {
      const answer = AnswerBalls.of(input);
      const ball = TargetBall.valueOf(target);
      expect(answer.contains(ball)).toBe(result);
    },
  );

  it.each([
    { input: [1, 2, 3], target: 1, index: 0, result: true },
    { input: [1, 2, 4], target: 2, index: 1, result: true },
    { input: [2, 1, 5], target: 5, index: 2, result: true },
    { input: [7, 8, 9], target: 7, index: 1, result: false },
    { input: [1, 4, 9], target: 9, index: 0, result: false },
    { input: [1, 4, 9], target: 1, index: 1, result: false },
  ])(
    '`match` 메서드는 `balls`에 입력받은 `index`가 입력받은 `TargetBall`과 같은지 판별한다.',
    ({ input, target, index, result }) => {
      const answer = AnswerBalls.of(input);
      const ball = TargetBall.valueOf(target);
      expect(answer.match(ball, index)).toBe(result);
    },
  );
});
