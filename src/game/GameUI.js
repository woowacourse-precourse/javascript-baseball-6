import { NUMBER_LENGTH, CONSOLE_MESSAGE } from '../Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from '../validation.js';
class GameUI {
  constructor(game) {
    this.game = game;
  }
  // 유저가 게임을 시작할 것인지 여부를 물어보는 숫자 입력
  async askExitNumber() {
    MissionUtils.Console.print(CONSOLE_MESSAGE.CORRECT);
    const EXIT_NUMBER = await MissionUtils.Console.readLineAsync(
      CONSOLE_MESSAGE.IS_RESTART
    );
    return EXIT_NUMBER;
  }
  //스트라이크 볼 개수 결과 출력
  showResults(strikeNumbers, ballNumbers) {
    if (strikeNumbers === 0 && ballNumbers === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }
    const ballOutput = ballNumbers !== 0 ? `${ballNumbers}볼 ` : '';
    const strikeOutput =
      strikeNumbers !== 0 ? `${strikeNumbers}스트라이크` : '';
    MissionUtils.Console.print(`${ballOutput}${strikeOutput}`);
  }
  //유저가 숫자 입력
  async askNumber() {
    const guessNumber = await MissionUtils.Console.readLineAsync(
      CONSOLE_MESSAGE.INPUT_NUMBER
    );
    Validation.verityUserNumber(guessNumber);
    const { strikeNumbers, ballNumbers } =
      this.game.compareNumbers(guessNumber);
    this.showResults(strikeNumbers, ballNumbers);
    if (strikeNumbers === NUMBER_LENGTH) {
      return true;
    }
    await this.askNumber();
  }
}
export default GameUI;
