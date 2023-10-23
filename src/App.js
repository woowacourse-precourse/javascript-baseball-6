import { MissionUtils } from '@woowacourse/mission-utils';
import { CONTINUE, NUMBER_LENGTH, EXIT } from './Constants.js';
import Game from './Game.js';
import Message from './Message.js';

const game = new Game();
class App {
  gameStatus = CONTINUE;

  userInput = [];

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 : ',
    );

    const regexp = new RegExp(`^(?!.*(.).*\\1)[1-9]{${NUMBER_LENGTH}}$`);
    // ^: 문자열의 시작
    // (?!.*(.).*\1): 중복 비허용
    // [1-9]{n}: 1~9 사이 숫자를 n번 반복
    // $: 문자열의 끝

    if (regexp.test(userInput) === false) {
      throw Error('[ERROR] 입력 값이 올바르지 않습니다.');
    }

    this.userInput = Array.from(userInput, (char) => Number(char));
  }

  async decideGameContinuation() {
    const input = await MissionUtils.Console.readLineAsync(
      `게임을 새로 시작하려면 ${CONTINUE}, 종료하려면 ${EXIT}를 입력하세요.\n`,
    );
    if (input !== CONTINUE && input !== EXIT) {
      throw Error('[ERROR] 입력 값이 올바르지 않습니다.');
    }
    return input;
  }

  init() {
    Message.printGameStart();
    game.setAnswer();
    game.initCntStrike();
    game.initCntBall();
  }

  async play() {
    this.init();

    while (this.gameStatus !== EXIT) {
      game.initCntStrike();
      game.initCntBall();
      await this.getUserInput();
      game.countStrike(this.userInput);
      game.countBall(this.userInput);
      Message.printPlayerGuessResult(game.cntBall, game.cntStrike);

      if (game.cntStrike === NUMBER_LENGTH) {
        Message.printGameOver();
        this.gameStatus = await this.decideGameContinuation();
        if (this.gameStatus === EXIT) {
          break;
        }
        game.initAnswer();
        game.setAnswer();
      }
    }
  }
}

const app = new App();
app.play();

export default App;
