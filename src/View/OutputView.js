import { MissionUtils } from '@woowacourse/mission-utils';

const START_MESSAGE = Object.freeze('숫자 야구 게임을 시작합니다.');
const SUCCESS_MESSAGE = Object.freeze(
  '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
);

const OutputView = {
  printStartMessage() {
    MissionUtils.Console.print(START_MESSAGE);
  },

  print(message) {
    MissionUtils.Console.print(message);
  },

  printSuccessMessage() {
    MissionUtils.Console.print(SUCCESS_MESSAGE);
  },
};

export default OutputView;
