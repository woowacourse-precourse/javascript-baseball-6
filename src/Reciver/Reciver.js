import { MissionUtils } from '@woowacourse/mission-utils';

class Receiver {
  #RECEIVE_MSG = '숫자를 입력해주세요 :';

  #CHOOSE_OPTION_MSG = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

  async receiveUserNumber() {
    const answer = await MissionUtils.Console.readLineAsync(this.#RECEIVE_MSG);

    return answer;
  }

  async receiveGameCondition() {
    const answer = await MissionUtils.Console.readLineAsync(this.#CHOOSE_OPTION_MSG);

    return answer;
  }
}

export default Receiver;
