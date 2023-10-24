import { splitNumbersToArray } from '../../src/utils/splitNumbersToArray.js';

describe('splitNumbersToArray 테스트', () => {
  it.each([
    { input: '123', output: [1, 2, 3] },
    { input: '123456', output: [1, 2, 3, 4, 5, 6] },
    { input: '12', output: [1, 2] },
    { input: '1', output: [1] },
    { input: '', output: [] },
    { input: '1ㄱㄴ', output: [1, NaN, NaN] },
  ])(
    'splitNumbersToArray는 문자로 이루어진 숫자 리스트를 숫자 배열로 변환한다',
    ({ input, output }) => {
      // given & when
      const result = splitNumbersToArray(input);

      // then
      expect(result).toEqual(output);
    },
  );
});
