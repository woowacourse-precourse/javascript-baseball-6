import { MissionUtils } from '@woowacourse/mission-utils';
import { AnswerBalls, SubmittedBalls } from '../../../src/domain';
import { BaseballService } from '../../../src/service/BaseballService';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('BaseballService 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([{ random: [1, 2, 3] }, { random: [4, 2, 2, 4, 3] }, { random: [7, 6, 9] }])(
    '필드값으로 랜덤한 TargetBall로 이루어진 answer와 submittedCorrectly를 보유한다.',
    ({ random }) => {
      mockRandoms(random);
      const service = new BaseballService();
      expect(service.answer).toEqual(AnswerBalls.of([...new Set(random)]));
      expect(service.submittedCorrectly).toBe(null);
    },
  );

  it.each([
    { submit: [1, 2, 3], random: [1, 2, 3], result: { strike: 3, ball: 0 } },
    { submit: [1, 2, 4], random: [4, 1, 2], result: { strike: 0, ball: 3 } },
    { submit: [2, 1, 5], random: [2, 1, 3], result: { strike: 2, ball: 0 } },
    { submit: [7, 8, 9], random: [9, 8, 7], result: { strike: 1, ball: 2 } },
    { submit: [1, 4, 9], random: [2, 3, 5], result: { strike: 0, ball: 0 } },
  ])(
    'computeScore는 입력받은 값을 숫자인 배열로 변환해 SubmittedBalls를 생성후 answer와 비교하여 결과를 반환한다.',
    ({ submit, random, result }) => {
      mockRandoms(random);

      const service = new BaseballService();
      expect(service.computeScore(submit)).toEqual(result);
    },
  );

  it.each([
    { submit: [1, 2, 3], random: [3, 2, 1], result: false },
    { submit: [1, 2, 4], random: [4, 1, 2], result: false },
    { submit: [2, 1, 5], random: [2, 1, 5], result: true },
  ])(
    '`isEnd`는 `submittedCorrectly`가 존재하여 게임의 종료 여부를 반환한다.',
    ({ submit, random, result }) => {
      mockRandoms(random);

      const service = new BaseballService();
      service.computeScore(submit);

      expect(service.submittedCorrectly).toEqual(result ? SubmittedBalls.of(submit) : null);
      expect(service.isEnd()).toBe(result);
    },
  );
});
