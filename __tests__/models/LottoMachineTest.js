import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../../src/models/LottoMachine.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 기계 모델 기능 테스트', () => {
  test('금액만큼 로또를 발행한다.', () => {
    // given
    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const cost = 1000;
    const lottoMachine = new LottoMachine(cost);

    mockRandoms([RANDOM_NUMBERS_TO_END]);

    // when
    lottoMachine.issueLotto();

    //then
    lottoMachine.lottos.forEach((lotto) => {
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    expect(lottoMachine.isIssueOver()).toBe(true);
  });

  test('구매 가격이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoMachine(Number('1000j'));
    }).toThrow('[ERROR]');
  });

  test('구매 가격이 1000 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoMachine(1020);
    }).toThrow('[ERROR]');
  });

  test('당첨 결과를 계산한다.', async () => {
    // given
    const RESULT = {
      FIRST_PRIZE: 0,
      SECOND_PRIZE: 1,
      THIRD_PRIZE: 0,
      FOURTH_PRIZE: 0,
      FIFTH_PRIZE: 0,
    };
    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 7];
    const WINNING_LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const cost = 1000;
    const lottoMachine = new LottoMachine(cost);

    mockRandoms([RANDOM_NUMBERS_TO_END]);

    // when
    await lottoMachine.issueLotto();
    await lottoMachine.issueWinningLotto(WINNING_LOTTO_NUMBERS, BONUS_NUMBER);
    await lottoMachine.calculatePrizeResult();

    //then
    expect(lottoMachine.prize.prizes).toEqual(RESULT);
  });
});
