import { MissionUtils } from '@woowacourse/mission-utils';
import Refree from '../src/Refree';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('심판이 내리는 결과 테스트', () => {
  test('볼, 스트라이크가 0인경우', () => {
    mockRandoms([1, 2, 3]);

    const refree = new Refree();
    expect(refree.judgeBallOrStrike([4, 5, 6])).toEqual({ ball: 0, strike: 0 });
  });

  test('볼이 1개인 경우', () => {
    mockRandoms([1, 2, 3]);

    const refree = new Refree();
    expect(refree.judgeBallOrStrike([2, 4, 5])).toEqual({ ball: 1, strike: 0 });
  });

  test('스트라이크가 1개인 경우', () => {
    mockRandoms([1, 2, 3]);

    const refree = new Refree();
    expect(refree.judgeBallOrStrike([4, 2, 5])).toEqual({ ball: 0, strike: 1 });
  });

  test('3스트라이크인 경우', () => {
    mockRandoms([1, 2, 3]);

    const refree = new Refree();
    expect(refree.judgeBallOrStrike([1, 2, 3])).toEqual({ ball: 0, strike: 3 });
  });
});
