import WinningLotto from '../../src/models/WinningLotto.js';

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

  test.each([
    {
      input: {
        matchCnt: 6,
        bonusMatch: false,
      },
      idx: 0,
    },
    {
      input: {
        matchCnt: 5,
        bonusMatch: true,
      },
      idx: 1,
    },
    {
      input: {
        matchCnt: 5,
        bonusMatch: false,
      },
      idx: 2,
    },
    {
      input: {
        matchCnt: 4,
        bonusMatch: false,
      },
      idx: 3,
    },
    {
      input: {
        matchCnt: 3,
        bonusMatch: false,
      },
      idx: 4,
    },
  ])(
    '전달된 당첨 정보를 당첨 기준에 대조하여 순위를 반환한다.',
    ({ input, idx }) => {
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      const BONUS_NUMBER = 7;
      const KEYS = [
        'FIRST_PRIZE',
        'SECOND_PRIZE',
        'THIRD_PRIZE',
        'FOURTH_PRIZE',
        'FIFTH_PRIZE',
      ];

      const winningLotto = new WinningLotto(WINNING_NUMBERS, BONUS_NUMBER);

      expect(winningLotto.getRankFromWinningStandard(input)).toBe(KEYS[idx]);
    }
  );
});
