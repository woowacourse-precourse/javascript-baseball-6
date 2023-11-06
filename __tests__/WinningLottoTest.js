import WinningLotto from '../src/models/WinningLotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7], 7);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5], 7);
    }).toThrow('[ERROR]');
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 0],
    [[1, 2, 3, 4, 5, 6], 46],
  ])('보너스 번호가 범위(1~45)를 벗어날 경우 예외가 발생한다.', (input) => {
    expect(() => {
      new WinningLotto(input);
    }).toThrow('[ERROR]');
  });
});
