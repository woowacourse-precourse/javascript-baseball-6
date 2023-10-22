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
      new TargetBalls(input);
    }).toThrow('[ERROR] 배열을 입력해주세요!');
  });

  it.each([{ input: [] }, { input: [1] }, { input: [1, 2] }, { input: [1, 2, 3, 4] }])(
    '입력받은 배열의 길이가 유효한 값이 아닐 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        new TargetBalls(input);
      }).toThrow('[ERROR] 3개의 숫자를 가진 배열을 입력해주세요!');
    },
  );

  it.each([{ input: [1, 1, 1] }, { input: [1, 2, 1] }, { input: [1, 2, 2] }, { input: [4, 2, 2] }])(
    '입력받은 배열에 중복이 있을 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        new TargetBalls(input);
      }).toThrow('[ERROR] 중복되지 않는 숫자들로 입력해주세요!');
    },
  );
});
