import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../../constants';

// 사용자로부터 숫자를 입력받습니다.
const getUserInput = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.INPUT_MESSAGE,
    );
    return input;
  } catch (error) {
    new Error('[ERROR]');
  }
};

export default getUserInput;
