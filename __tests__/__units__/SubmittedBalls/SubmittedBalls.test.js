import { SubmittedBalls, TargetBalls } from '../../../src/domain';

describe('SubmittedBalls 테스트', () => {
  it.each([
    { input: [1, 2, 3] },
    { input: [1, 2, 4] },
    { input: [5, 1, 2] },
    { input: [7, 8, 9] },
    { input: [1, 4, 9] },
  ])('입력받은 배열에 따라 `targetBalls` 필드에 `TargetBalls`를 가진다.', ({ input }) => {
    const submittedBalls = SubmittedBalls.of(input);
    expect(submittedBalls.getTargetBalls()).toEqual(TargetBalls.of(input));
  });

  it('`increaseStrike` 메서드는 `score`의 `strike`를 `1` 증가시킨다.', () => {
    const submittedBalls = SubmittedBalls.of([1, 2, 3]);
    submittedBalls.increaseStrike();
    expect(submittedBalls.getScore().strike).toBe(1);
    submittedBalls.increaseStrike();
    expect(submittedBalls.getScore().strike).toBe(2);
  });

  it('`increaseBall` 메서드는 `score`의 `ball`을 `1` 증가시킨다.', () => {
    const submittedBalls = SubmittedBalls.of([1, 2, 3]);
    submittedBalls.increaseBall();
    expect(submittedBalls.getScore().ball).toBe(1);
    submittedBalls.increaseBall();
    expect(submittedBalls.getScore().ball).toBe(2);
  });
});
