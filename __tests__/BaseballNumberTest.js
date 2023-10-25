import { BaseballNumber } from '../src/Model/BaseballNumber.js';
import { BaseballNumberError } from '../src/Model/Error.js';
import { ERROR } from '../src/constants/error.js';

describe('BaseballNumber Class', () => {
  describe('객체 생성 테스트.', () => {
    test('인스턴스 생성이 가능한 숫자, 문자열, 배열을 입력받아 객체 생성', () => {
      const mockCases = [
        { input: 123, expected: [1, 2, 3] },
        { input: '456', expected: [4, 5, 6] },
        { input: ['7', '8', '9'], expected: [7, 8, 9] },
      ];

      mockCases.forEach((testCase) => {
        const { input, expected } = testCase;
        const baseballNumber = new BaseballNumber(input);

        expect(baseballNumber._numberList).toEqual(expected);
      });
    });

    test('인스턴스 생성이 불가능한 숫자, 문자열, 배열을 입력받아 객체 생성', () => {
      const mockCases = [
        { input: {}, expected: ERROR.MESSAGE.INVALID_BASEBALL_NUMBER_TYPE },
        { input: '12', expected: ERROR.MESSAGE.INVALID_DIGITS },
        { input: '112', expected: ERROR.MESSAGE.DUPLICATE_NUMBERS },
        { input: '019', expected: ERROR.MESSAGE.OUT_OF_RANGE },
        { input: 'abc', expected: ERROR.MESSAGE.NOT_A_NUMBER },
      ];

      mockCases.forEach((testCase) => {
        const { input, expected } = testCase;

        expect(() => new BaseballNumber(input)).toThrow(BaseballNumberError);
        expect(() => new BaseballNumber(input)).toThrow(expected);
      });
    });
  });
});
