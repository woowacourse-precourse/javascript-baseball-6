import isDuplication from './index.js';

describe('isDuplication', () => {
  test('input에 중복값이 존재하면 true 리턴', () => {
    // given
    const input = '233';

    // when
    // then
    expect(isDuplication(input)).toBe(true);
  });

  test('input에 중복값이 존재하지 않으면 false 리턴', () => {
    // given
    const input = '123';

    // when
    // then
    expect(isDuplication(input)).toBe(false);
  });
});
