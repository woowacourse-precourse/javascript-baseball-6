import { MissionUtils } from '@woowacourse/mission-utils';
import { ANSWER_MESSAGE, NOTHING_MESSAGE } from '../../constants';

const getGameInput = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );
    return input;
  } catch (error) {
    new Error('[ERROR]');
  }
};

const setGame = async (result) => {
  if (result === ANSWER_MESSAGE) {
    MissionUtils.Console.print(result);
    const isRestart = getGameInput();
    if (isRestart === 1) {
      const newGame = new App();
      await newGame.play();
    } else if (isRestart === 2) {
      process.exit();
    }
  } else {
    MissionUtils.Console.print(result);
  }
};

export default setGame;
