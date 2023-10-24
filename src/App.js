import { MissionUtils } from '@woowacourse/mission-utils';

const CORRECT_NUMBER = 3;

class App {
  isPlaying;

  computer = new Computer();
  player = new Player();
  gameManager = new GameManager();
  validator = new Validator();

  async play() {
    this.computer.generateThreeDigits();
    this.isPlaying = true;
    try {
      while (this.isPlaying) {
        const USER_NUMBER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        this.player.setThreeDigits(USER_NUMBER);

        const { STRIKE, BALL } = this.gameManager.evaluatePlayerInput(this.player.number, this.computer.getThreeDigits());
        MissionUtils.Console.print(this.gameManager.printResultMessage(STRIKE, BALL));

        if (STRIKE === CORRECT_NUMBER) {
          const CHOICE = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

          if (this.validator.validatePlayerChoice(CHOICE)) throw new Error('1 또는 2가 입력되지 않았습니다.');
          this.player.setChoice(CHOICE)

          if (this.player.choice === '1') {
            this.computer.generateThreeDigits();
            continue;
          }

          if (this.player.choice === '2') {
            this.isPlaying = false;
            MissionUtils.Console.print('게임 종료');
          }
        }
      }
    } catch (e) {
      MissionUtils.Console.print('잘못된 입력입니다. 게임을 종료합니다');

      throw e;
    }
  }
}

class Computer {
  #number;

  getThreeDigits() {
    return this.#number;
  }

  generateThreeDigits() {
    let stringThreeDigits = '';

    while (stringThreeDigits.length < 3) {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!stringThreeDigits.includes(String(RANDOM_NUM))) {
        stringThreeDigits += String(RANDOM_NUM);
      }
    }

    this.#number = Number(stringThreeDigits);
  }
}

class Player {
  validator = new Validator();
  number;
  choice;

  setThreeDigits(num) {
    if (!this.validator.isValidPlayerNumber(num)) throw new Error('[ERROR] : 유효하지 않은 입력입니다.');
    
    this.number = num;
  }

  setChoice(choice) {
    this.choice = choice;
  }
}

class GameManager {
  evaluatePlayerInput(userInput, computerValue) {
    const USER_INPUT_ARRAY = [...String(userInput)];
    const COMPUTER_VALUE_ARRAY = [...String(computerValue)];
    const STRIKE = USER_INPUT_ARRAY.filter((v, i) => v === COMPUTER_VALUE_ARRAY[i]).length;
    const BALL = COMPUTER_VALUE_ARRAY.filter((v, i) => (v !== USER_INPUT_ARRAY[i]) && USER_INPUT_ARRAY.includes(v)).length;

    return { STRIKE, BALL };
  }

  printResultMessage(strike, ball) {
    let str = '';

    if (strike === CORRECT_NUMBER) {
      str = '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    } else if (strike === 0 && ball === 0) {
      str = '낫싱';
    } else if (strike > 0 || ball > 0) {
      str = `${ball ? ball + '볼' : ''} ${strike ? strike + '스트라이크' : ''}`.trim();
    }

    return str;
  }
}

class Validator {
  validatePlayerChoice(input) {
    return !/^[12]$/.test(input)
  }

  isThreeDigits(input) {
    return /^[1-9]{3}$/.test(String(input))
  }

  isValidPlayerNumber(input) {
    const SET = new Set(...[String(input)]);
    if (this.isThreeDigits(input) && SET.size === 3) {
      return true;
    }

    return false;
  }
}

export default App;
