import { SubmittedBalls, TargetBalls } from '../../../src/domain';

describe('SubmittedBalls 테스트', () => {
  it.each([
    { input: [1, 2, 3] },
    { input: [1, 2, 4] },
    { input: [5, 1, 2] },
    { input: [7, 8, 9] },
    { input: [1, 4, 9] },
  ])('입력받은 배열에 따라 `targetBalls` 필드에 `TargetBalls`를 가진다.', ({ input }) => {
    // given
    const submittedBalls = SubmittedBalls.of(input);

    // when & then
    expect(submittedBalls.getTargetBalls()).toEqual(TargetBalls.of(input));
  });

  it('`increaseStrike` 메서드는 `score`의 `strike`를 `1` 증가시킨다.', () => {
    // given
    const submittedBalls = SubmittedBalls.of([1, 2, 3]);

    // when
    submittedBalls.increaseStrike();

    // then
    expect(submittedBalls.getScore().strike).toBe(1);
  });

  it('`increaseBall` 메서드는 `score`의 `ball`을 `1` 증가시킨다.', () => {
    // given
    const submittedBalls = SubmittedBalls.of([1, 2, 3]);

    // when
    submittedBalls.increaseBall();

    // then
    expect(submittedBalls.getScore().ball).toBe(1);
  });
});
