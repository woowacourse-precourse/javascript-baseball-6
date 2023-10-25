import { MissionUtils } from '@woowacourse/mission-utils';
import compareNum from '../src/utils/compareNum';
import mkOpponentNum from '../src/utils/mkOpponentNum';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('utils function Test', () => {
  test('compareNum function Test', () => {
    // given
    const testOpponentArray = [1, 2, 3];
    const testPlayerArrayList = [
      [1, 2, 3],
      [3, 2, 1],
      [3, 1, 2],
      [4, 5, 6],
    ];
    const correctStrikeBall = [
      { strike: 3, ball: 0 },
      { strike: 1, ball: 2 },
      { strike: 0, ball: 3 },
      { strike: 0, ball: 0 },
    ];

    // when
    const expectStrikeBall = testPlayerArrayList.map((value) =>
      compareNum(testOpponentArray, value)
    );

    // then
    expect(expectStrikeBall).toEqual(correctStrikeBall);
  });

  test('mkOpponentNum function Test', () => {
    // given
    const randoms = [1, 2, 3];
    const correctRandomNumber = '123';
    mockRandoms(randoms);

    // when
    const expectGeneratedNumber = mkOpponentNum();

    // then
    expect(expectGeneratedNumber).toEqual(correctRandomNumber);
  });
});
