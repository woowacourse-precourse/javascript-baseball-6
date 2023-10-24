import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from '../../src/model/Computer.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Computer Class Test', () => {
  test('pickInNumberInRange Test', () => {
    // given
    const computer = new Computer();
    const randomNumbers = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    randomNumbers.forEach((randomNumber) => {
      mockRandoms(randomNumber);
      // when
      computer.generate();
      // then
      const generatedComputerNumbers = Array.from(computer.getSelectNumber());
      expect(generatedComputerNumbers).toEqual(randomNumber);
    });
  });
});
