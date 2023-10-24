import { MissionUtils } from '@woowacourse/mission-utils';

const CORRECT_NUMBER = 3;

class App {
  isPlaying;

  computer = new Computer();
  player = new Player();
  gameManager = new GameManager();

  async play() {
    this.computer.generateThreeDigits();
    this.isPlaying = true;
    try {
      while (this.isPlaying) {
        const userNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        this.player.setThreeDigits(userNumber);

        const { strike, ball } = this.gameManager.evaluatePlayerInput(this.player.number, this.computer.getThreeDigits());
        MissionUtils.Console.print(this.gameManager.printResultMessage(strike, ball));

        if (strike === CORRECT_NUMBER) {
          const choice = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

          if (Validator.validatePlayerChoice(choice)) throw new Error('1 또는 2가 입력되지 않았습니다.');
          this.player.setChoice(choice);
          const playerWantRestart = this.player.choice === '1';

          if (playerWantRestart) {
            this.computer.generateThreeDigits();
            continue;
          }

          this.isPlaying = false;
          MissionUtils.Console.print('게임 종료');
        }
      }
    } catch (e) {
      MissionUtils.Console.print('잘못된 입력입니다. 게임을 종료합니다');

      throw e;
    }
  }
}

class Computer {
  #generatedNumber;

  getThreeDigits() {
    return this.#generatedNumber;
  }

  generateThreeDigits() {
    let stringThreeDigits = '';

    while (stringThreeDigits.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!stringThreeDigits.includes(String(randomNumber))) {
        stringThreeDigits += String(randomNumber);
      }
    }

    this.#generatedNumber = Number(stringThreeDigits);
  }
}

class Player {
  number;
  choice;

  setThreeDigits(num) {
    if (!Validator.isValidPlayerNumber(num)) throw new Error('[ERROR] : 유효하지 않은 입력입니다.');

    this.number = num;
  }

  setChoice(choice) {
    this.choice = choice;
  }
}

class GameManager {
  evaluatePlayerInput(userInput, computerValue) {
    const userInputArray = Array.from(String(userInput));
    const computerValueArray = Array.from(String(computerValue));
    const strike = userInputArray.filter((v, i) => v === computerValueArray[i]).length;
    const ball = computerValueArray.filter((v, i) => (v !== userInputArray[i]) && userInputArray.includes(v)).length;

    return { strike, ball };
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
  static validatePlayerChoice(input) {
    return !/^[12]$/.test(input);
  }

  static isThreeDigits(input) {
    return /^[1-9]{3}$/.test(String(input));
  }

  static isValidPlayerNumber(input) {
    const set = new Set(Array.from(String(input)));
    if (this.isThreeDigits(input) && set.size === 3) {
      return true;
    }

    return false;
  }
}

export default App;
