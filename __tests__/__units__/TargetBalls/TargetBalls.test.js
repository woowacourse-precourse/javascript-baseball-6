import { TargetBall, TargetBalls } from '../../../src/domain';

describe('TargetBalls 테스트', () => {
  it.each([{ input: [1, 2] }])(
    '입력받은 배열에 따라 `numbers` 필드에 `TargetBall`로 이루어진 배열을 가진다.',
    ({ input }) => {
      const balls = TargetBalls.of(input);
      expect(balls.numbers).toEqual(input.map(TargetBall.valueOf));
    },
  );
});
