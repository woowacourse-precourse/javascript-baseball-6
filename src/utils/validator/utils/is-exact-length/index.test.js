import isExactLength from './index.js';

describe('isExactLength', () => {
  test('input값이 targetLength와 일치하면 true 리턴', () => {
    // given
    const input = '12345';
    const targetLength = 5;

    // when
    // then
    expect(isExactLength(input, targetLength)).toBe(true);
  });

  test('input값이 targetLength와 일치하지 않으면 false', () => {
    // given
    const input = '72345';
    const targetLength = 3;

    // when
    // then
    expect(isExactLength(input, targetLength)).toBe(false);
  });
});
