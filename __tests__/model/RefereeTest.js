import { MissionUtils } from '@woowacourse/mission-utils';
import Player from '../../src/model/Player.js';
import Computer from '../../src/model/Computer.js';
import Referee from '../../src/model/Referee.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Referee Class Test', () => {
  test('Comparison Logic Test', () => {
    // given
    const expectBallCounts = [
      { strike: 2, ball: 0 },
      { strike: 1, ball: 0 },
      { strike: 0, ball: 0 },
    ];
    const computerRandomNumbers = [1, 2, 3];
    const playerInputs = ['124', '145', '456'];
    const computer = new Computer();
    const player = new Player();
    const referee = new Referee();

    mockRandoms(computerRandomNumbers);
    computer.generate();

    const computerNumbers = computer.getSelectNumber();
    playerInputs.forEach((playerInput, idx) => {
      player.setSelectNumber(playerInput);

      const playerNumbers = player.getSelectNumber();
      // when
      const compareResults = referee.compareNumbers(
        playerNumbers,
        computerNumbers
      );
      // then
      expect(compareResults.strike).toEqual(expectBallCounts[idx].strike);
      expect(compareResults.ball).toEqual(expectBallCounts[idx].ball);
    });
  });
});
