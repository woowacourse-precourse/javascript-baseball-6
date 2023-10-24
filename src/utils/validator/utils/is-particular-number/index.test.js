import isParticularNumber from './index.js';

describe('isParticularNumber', () => {
  test('특정 숫자가 포함되면 true  포함되지 않으면 false 리턴', () => {
    // given
    const inputNumbers = ['5', '3', '2', '7'];
    const targetNumbers = [4, 3, 1, 7];
    const results = [false, true, false, true];

    // when
    // given
    inputNumbers.forEach((number, index) => {
      expect(isParticularNumber(number, targetNumbers[index])).toBe(results[index]);
    });
  });
});
