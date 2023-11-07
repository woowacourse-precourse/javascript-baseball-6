import Statistics from '../../src/models/Statistics';

describe('통계 모델 기능 테스트', () => {
  test('수익률을 계산한다.', () => {
    // given
    const ISSUE_CNT = 1;
    const RESULT = {
      FIRST_PRIZE: 1,
      SECOND_PRIZE: 1,
      THIRD_PRIZE: 0,
      FOURTH_PRIZE: 0,
      FIFTH_PRIZE: 0,
    };
    const RATIO = '203000000.0';

    // when
    const statistics = new Statistics(ISSUE_CNT, RESULT);

    //then
    expect(statistics.getPriceEarningsRatio()).toBe(RATIO);
  });
});
