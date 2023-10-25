import { pickRandomNumberInRange } from '../../src/utils/random.js';

describe('pickRandomNumberInRange 테스트', () => {
  test.each([
    [1, 10],
    [5, 15],
    [0, 100],
    [-10, 10],
    [50, 60],
  ])('숫자 범위가 %i ~ %i 일 때, 지정된 범위의 값이 반환된다.', (min, max) => {
    // given - when
    const result = pickRandomNumberInRange(min, max);
    // then
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
