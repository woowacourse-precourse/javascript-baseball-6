import { MissionUtils } from '@woowacourse/mission-utils';
class BaseballView {
  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
  async getUserInput() {
    return await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ');
  }
  errorMessage(message) {
    throw new Error(`[ERROR] ${message}`);
  }
  result(strike, ball) {
    if (strike || ball) {
      MissionUtils.Console.print(
        `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`
      );
    } else {
      MissionUtils.Console.print('낫싱');
    }
  }
  async gameClear() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    return await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
  }
}

export default BaseballView;
