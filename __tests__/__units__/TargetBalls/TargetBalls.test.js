import { TargetBall, TargetBalls } from '../../../src/domain';

describe('TargetBalls 테스트', () => {
  it.each([
    { input: [1, 2, 3] },
    { input: [1, 2, 4] },
    { input: [5, 1, 2] },
    { input: [7, 8, 9] },
    { input: [1, 4, 9] },
  ])('입력받은 배열에 따라 `balls` 필드에 `TargetBall`로 이루어진 배열을 가진다.', ({ input }) => {
    const targetBalls = TargetBalls.of(input);
    expect(targetBalls.getBalls()).toEqual(input.map(TargetBall.valueOf));
  });
});
