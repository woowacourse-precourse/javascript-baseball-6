import isNumber from './index.js';

describe('isNumber', () => {
  test('string이 input값으로 들어오면 false 리턴', () => {
    // given
    const input = 'test';

    // when
    // then
    expect(isNumber(input)).toBe(false);
  });

  test('number가 input값으로 들어오면 true 리턴', () => {
    // given
    const input = '23';

    // when
    // then
    expect(isNumber(input)).toBe(true);
  });
});
