import Lotto from '../../src/models/Lotto.js';
import Prize from '../../src/models/Prize.js';
import WinningLotto from '../../src/models/WinningLotto.js';

describe('Prize 클래스 기능 테스트', () => {
  // test('당첨 결과 확인', () => {
  //   // given
  //   const lottos = [
  //     [1, 2, 3, 4, 5, 6],
  //     [1, 2, 3, 5, 6, 7],
  //   ];
  //   const winningLotto = { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 };
  //   const RESULT = [
  //     { matchCnt: 6, bonusMatch: false },
  //     { matchCnt: 5, bonusMatch: true },
  //   ];

  //   // when
  //   const prize = new Prize(lottos, winningLotto);

  //   // then
  //   expect(prize.getMatchCntResults()).toEqual(RESULT);
  // });

  test('당첨 상금 확인 - 1개 이상 당첨됐을 때', async () => {
    // given
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 5, 6, 7],
    ].map((numbers) => new Lotto(numbers));
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);

    const RESULT = {
      FIRST_PRIZE: 1,
      SECOND_PRIZE: 1,
      THIRD_PRIZE: 0,
      FOURTH_PRIZE: 0,
      FIFTH_PRIZE: 0,
    };

    // when
    const prize = new Prize(lottos, winningLotto);
    await prize.updatePrizes();

    // then
    expect(prize.prizes).toEqual(RESULT);
  });

  test('당첨 상금 확인 - 당첨된 게 아무것도 없을 때', () => {
    // given
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 5, 6, 7],
    ].map((numbers) => new Lotto(numbers));
    const winningLotto = new WinningLotto([10, 11, 12, 13, 14, 15], 7);

    const RESULT = {
      FIRST_PRIZE: 0,
      SECOND_PRIZE: 0,
      THIRD_PRIZE: 0,
      FOURTH_PRIZE: 0,
      FIFTH_PRIZE: 0,
    };

    // when
    const prize = new Prize(lottos, winningLotto);
    prize.updatePrizes();

    // then
    expect(prize.prizes).toEqual(RESULT);
  });
});
