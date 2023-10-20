import { MissionUtils } from '@woowacourse/mission-utils';

const START_MESSAGE = '숫자 야구 게임을 시작합니다.';

const OutputView = {
  printStartMessage() {
    MissionUtils.Console.print(START_MESSAGE);
  },

  printError(error) {
    MissionUtils.Console.print(error);
  },

  printMessage(message) {
    MissionUtils.Console.print(message);
  },
};

export default OutputView;
