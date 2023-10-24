import { ERROR_MESSAGE } from '../../../src/constants/error';
import { TargetBall } from '../../../src/domain';

describe('TargetBall 예외 테스트', () => {
  it.each([
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: 1234567890123456789012345678901234567890n },
    { input: true },
    { input: {} },
    { input: [] },
  ])('입력받은 값이 숫자가 아닐 경우 에러를 발생시킨다. (input: $input)', ({ input }) => {
    expect(() => {
      new TargetBall(input);
    }).toThrow(ERROR_MESSAGE.common.notNumber);
  });

  it.each([{ input: 4.1 }, { input: 1.3 }])(
    '입력받은 값이 정수가 아닐 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        new TargetBall(input);
      }).toThrow(ERROR_MESSAGE.common.notInteger);
    },
  );

  it.each([{ input: 0 }, { input: 10 }, { input: 99 }])(
    '입력받은 값이 범위 내 숫자가 아닐 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        new TargetBall(input);
      }).toThrow(ERROR_MESSAGE.common.outOfRange(TargetBall.MIN, TargetBall.MAX));
    },
  );
});
