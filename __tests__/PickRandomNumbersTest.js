import PickRandomNumbers from '../src/PickRandomNumbers';

describe('랜덤으로 3개의 서로 다른 1~9 범위의 수를 뽑는 기능', () => {
  test('배열의 요소가 1이상 9이하의 범위', () => {
    const randomNumbers = PickRandomNumbers();
    randomNumbers.forEach((number) => {
      expect(number).toBeLessThan(10);
      expect(number).toBeGreaterThan(0);
    });
  });

  test('배열의 요소가 중복없이 3개', () => {
    const randomNumbers = PickRandomNumbers();
    const deduplicationNumbers = [...new Set(randomNumbers)];
    expect(deduplicationNumbers).toHaveLength(3);
  });
});
