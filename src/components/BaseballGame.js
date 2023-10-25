import { Console } from '@woowacourse/mission-utils';
import RandomNumberGenerator from './RandomNumberGenerator.js';
import UserInputValidator from './UserInputValidator.js';
import GameCalculator from './GameCalculator.js';


class BaseballGame {
  constructor() {
    this.gameCount = 0;
    this.randomNumber = null;
    this.userInput = null;
  }

  async gameStart() {
    const RANDOM_NUMBER_GENERATOR = new RandomNumberGenerator();
    this.randomNumber = RANDOM_NUMBER_GENERATOR.generateRandomNumber();

    if(this.gameCount > 0) {
      Console.print(`플레이한 게임 수: ${this.gameCount}`);
    }

    Console.print('숫자 야구 게임을 시작합니다.');
    await this.getUserInput();
  }

  async getUserInput() {
    this.userInput = await Console.readLineAsync( 
      '1~9를 이용하여 각 자리가 중복되지 않는 세자리 숫자를 입력해주세요 : '
    );
    const USER_INPUT_VALIDATOR = new UserInputValidator(this.userInput);
    USER_INPUT_VALIDATOR.validateUserInput();
    await this.showGameResult();
  }
  
  async showGameResult() {
    const GAME_CALCULATOR = new GameCalculator(
      this.userInput,
      this.randomNumber
    );
    const GAME_RESULT_STRING = GAME_CALCULATOR.getStringResult();
    Console.print(GAME_RESULT_STRING);

    if (GAME_CALCULATOR.validateAnswer()) {
      await this.restart();
    } else {
      await this.getUserInput();
    }
  }

  async restart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const RESTART_INPUT = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    
    if (RESTART_INPUT === '1') {
      this.gameCount += 1;
      await this.gameStart();
    } else if (RESTART_INPUT === '2') {
      return;
    } else {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }
}

export default BaseballGame;
