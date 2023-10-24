import { MissionUtils } from '@woowacourse/mission-utils';
import { CORRECT_NUMBER, PROMPT_MESSAGE, ERROR_MESSAGE, ALERT_MESSAGE } from './constant';
import { Computer, Player, GameManager, Validator } from './baseball';

class App {
  isPlaying;

  computer = new Computer();
  player = new Player();
  gameManager = new GameManager();

  async play() {
    MissionUtils.Console.print(ALERT_MESSAGE.GAME_START);
    this.computer.generateThreeDigits();
    this.isPlaying = true;
    try {
      while (this.isPlaying) {
        const userNumber = await MissionUtils.Console.readLineAsync(PROMPT_MESSAGE.PRESS_NUMBER);
        this.player.setThreeDigits(userNumber);

        const { strike, ball } = this.gameManager.evaluatePlayerInput(this.player.number, this.computer.getThreeDigits());
        MissionUtils.Console.print(ALERT_MESSAGE.resultMessage(strike, ball));

        if (strike === CORRECT_NUMBER) {
          const choice = await MissionUtils.Console.readLineAsync(PROMPT_MESSAGE.CHOICE_RESTART);

          if (Validator.validatePlayerChoice(choice)) throw new Error(ERROR_MESSAGE.INVALID_CHOICE);
          this.player.setChoice(choice);
          const playerWantRestart = this.player.choice === '1';

          if (playerWantRestart) {
            this.computer.generateThreeDigits();
            continue;
          }

          this.isPlaying = false;
          MissionUtils.Console.print(ALERT_MESSAGE.GAME_OVER);
        }
      }
    } catch (e) {
      MissionUtils.Console.print(ERROR_MESSAGE.INVALID_INPUT);

      throw e;
    }
  }
}

export default App;