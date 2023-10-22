import { MissionUtils } from '@woowacourse/mission-utils';

class Receiver {
  #RECEIVE_MSG = '숫자를 입력해주세요 :';

  async receiveUserNumber() {
    const answer = await MissionUtils.Console.readLineAsync(this.#RECEIVE_MSG);

    return answer;
  }
}

export default Receiver;
