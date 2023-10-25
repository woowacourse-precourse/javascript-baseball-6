import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../../constants';

const getGameCommand = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.COMMAND_MESSAGE,
    );
    return input;
  } catch (error) {
    new Error('[ERROR]');
  }
};

export default getGameCommand;
