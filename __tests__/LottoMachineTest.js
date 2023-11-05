import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/models/LottoMachine.js';

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
      expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
