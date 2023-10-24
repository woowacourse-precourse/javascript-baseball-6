import { ERROR_MESSAGE } from '../../../src/constants/error';
import { TargetBalls } from '../../../src/domain';

describe('TargetBalls 예외 테스트', () => {
  it.each([
    { input: 1 },
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: true },
    { input: {} },
  ])('입력받은 값이 배열 아닐 경우 에러를 발생시킨다. (input: $input)', ({ input }) => {
    expect(() => {
      // given
      new TargetBalls(input);

      // when & then
    }).toThrow(ERROR_MESSAGE.common.notArray);
  });

  it.each([{ input: [] }, { input: [1] }, { input: [1, 2] }, { input: [1, 2, 3, 4] }])(
    '입력받은 배열의 길이가 유효한 값이 아닐 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        // given
        new TargetBalls(input);

        // when & then
      }).toThrow(ERROR_MESSAGE.targetBalls.invalidQuantity(TargetBalls.BALL_QUANTITY));
    },
  );

  it.each([{ input: [1, 1, 1] }, { input: [1, 2, 1] }, { input: [1, 2, 2] }, { input: [4, 2, 2] }])(
    '입력받은 배열에 중복이 있을 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        // given
        new TargetBalls(input);

        // when & then
      }).toThrow(ERROR_MESSAGE.targetBalls.isDuplicated);
    },
  );
});
