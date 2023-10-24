import { Console } from '@woowacourse/mission-utils';
import NumberGenerator from './NumberGenerator';
import GameEngine from './GameEngine';

class GamePlayer {
  // 게임을 시작하는 함수
  static async startGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let isRestart = false;
    while (!isRestart) {
      const computerNumber = NumberGenerator.createRandomNumbers();
      await this.receiveNumber(computerNumber);
      isRestart = await this.isRestart();
    }
  }

  // 숫자를 입력받는 함수
  static async receiveNumber(computerNumber) {
    let isThreeStrike = false;
    while (!isThreeStrike) {
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
      const playerNumber = GameEngine.inputToArray(input);
      isThreeStrike = GameEngine.countScore(computerNumber, playerNumber);
    }
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  // 재시작할지 선택하는 함수
  static async isRestart() {
    const isRestart = await Console.readLineAsync(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
    );
    if (isRestart !== '1' && isRestart !== '2') {
      throw new Error('[ERROR] 잘못된 입력값입니다.');
    }
    return isRestart === '2';
  }
}

export default GamePlayer;
