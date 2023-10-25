import { CONSOLE_MESSAGE } from '../Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from '../validation.js';
class GameUI {
  constructor(game) {
    this.game = game;
  }
  // 입력 메소드들
  // 유저가 게임을 시작할 것인지 여부를 물어보는 숫자 입력
  async askExitNumber() {
    const EXIT_NUMBER = await MissionUtils.Console.readLineAsync(
      CONSOLE_MESSAGE.IS_RESTART
    );
    Validation.verifyExitNumber(EXIT_NUMBER);
    return EXIT_NUMBER;
  }
  //유저가 숫자 입력
  async askGuessNumber() {
    const guessNumber = await MissionUtils.Console.readLineAsync(
      CONSOLE_MESSAGE.INPUT_NUMBER
    );
    Validation.verityUserNumber(guessNumber);
    return guessNumber;
  }
  //출력 메소드들
  //볼 출력값
  ballOutput(ballNumbers) {
    if (ballNumbers !== 0) {
      return `${ballNumbers}볼 `;
    }
    return '';
  }
  //스트라이크 출력값
  strikeOutput(strikeNumbers) {
    if (strikeNumbers !== 0) {
      return `${strikeNumbers}스트라이크`;
    }
    return '';
  }
  //3스트라이크시 출력
  threeStrike() {
    MissionUtils.Console.print(CONSOLE_MESSAGE.THREE_STRIKE);
  }
  //스트라이크 볼 개수 결과 출력
  showResults(strikeNumbers, ballNumbers) {
    let result = '';
    result += this.game.isNothing(strikeNumbers, ballNumbers);
    result += this.ballOutput(ballNumbers);
    result += this.strikeOutput(strikeNumbers);
    MissionUtils.Console.print(result);
  }
}
export default GameUI;
