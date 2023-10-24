import { MissionUtils } from '@woowacourse/mission-utils';
import { OutputString } from '../constants/index.js';

const OutputView = {
  printStartString: () => {
    MissionUtils.Console.print(OutputString.OUTPUT_GAME_START);
  },

  printResultString: (ballCount, strikeCount) => {
    const result = [];

    if (ballCount !== 0) result.push(`${ballCount}볼`);
    if (strikeCount !== 0) result.push(`${strikeCount}스트라이크`);
    if (ballCount === 0 && strikeCount === 0) result.push('낫싱');

    MissionUtils.Console.print(result.join(' '));
  },

  printEndString: () => {
    MissionUtils.Console.print(OutputString.OUTPUT_GAME_END);
  },
};

export default OutputView;
