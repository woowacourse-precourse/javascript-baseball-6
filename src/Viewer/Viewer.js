import { MissionUtils } from '@woowacourse/mission-utils';

class Viewer {
  #START = '숫자 야구 게임을 시작합니다';

  #CLEAR = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

  startMsg() {
    return MissionUtils.Console.print(this.#START);
  }

  clearMsg() {
    return MissionUtils.Console.print(this.#CLEAR);
  }
}

export default Viewer;
