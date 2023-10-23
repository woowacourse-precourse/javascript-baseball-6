import { Console } from '@woowacourse/mission-utils';
import NumberGenerator from './NumberGenerator';
import GameEngine from './GameEngine';

class GamePlayer {
  // 재시작할지 선택하는 함수
  async isRestart() {
    const isRestart = await Console.readLineAsync(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
    );
    if (isRestart !== '1' && isRestart !== '2') {
      throw new Error('[ERROR] 잘못된 입력값입니다.');
    }
    return isRestart === '2';
  }
}

export default GamePlayer;
