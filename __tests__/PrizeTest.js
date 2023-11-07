import Prize from '../src/models/Prize';

describe('Prize 클래스 기능 테스트', () => {
  test('당첨 결과 확인', () => {
    // given
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 5, 6, 7],
    ];
    const winningLotto = { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 };

    const RESULT = [
      { matchCnt: 6, bonusMatch: false },
      { matchCnt: 5, bonusMatch: true },
    ];

    // when
    const prize = new Prize(lottos, winningLotto);

    // then
    expect(() => {
      prize.getResult();
    }).toEqual(RESULT);
  });
});
