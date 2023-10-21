import { MissionUtils } from '@woowacourse/mission-utils';

const CORRECT_NUMBER = 3;

class App {
  computer = new Computer();
  player = new Player();
  gameManager = new GameManager();

  async play() {
    this.computer.generateThreeDigits();
    let isPlaying = true;
    try {
      while (isPlaying) {
        const USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        if (!this.gameManager.validatePlayerInput(USER_INPUT)) throw new Error('[ERROR] : 유효하지 않은 입력입니다.');
        this.player.setNumber(USER_INPUT);

        const { STRIKE, BALL } = this.gameManager.evaluatePlayerInput(this.player.number, this.computer.number);
        MissionUtils.Console.print(this.gameManager.printResultMessage(STRIKE, BALL));

        if (STRIKE === CORRECT_NUMBER) {
          const INPUT = await MissionUtils.Console.readLineAsync('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

          if (!/^[12]$/.test(INPUT)) throw new Error('1또는 2가 입력되지 않았습니다.');

          if (INPUT === '1') {
            this.computer.generateThreeDigits();
            continue;
          }

          if (INPUT === '2') {
            isPlaying = false;
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
  number;

  generateThreeDigits() {
    let stringThreeDigits = '';

    while (stringThreeDigits.length < 3) {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!stringThreeDigits.includes(String(RANDOM_NUM))) {
        stringThreeDigits += String(RANDOM_NUM);
      }
    }

    this.number = Number(stringThreeDigits);
  }
}

class Player {
  number;

  setNumber(num) {
    this.number = num;
  }
}

class GameManager {
  validatePlayerInput(input) {
    const STR_USER_INPUT = String(input);
    const SET_USER_INPUT = new Set([...STR_USER_INPUT]);

    if (/^[1-9]{3}$/.test(STR_USER_INPUT) && SET_USER_INPUT.size === 3) {
      return true;
    }

    return false;
  }

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
      str = '3스트라이크';
    } else if (strike === 0 && ball === 0) {
      str = '낫싱';
    } else if (strike > 0 || ball > 0) {
      str = `${ball ? ball + '볼' : ''} ${strike ? strike + '스트라이크' : ''}`.trim();
    }

    return str;
  }
}

export default App;
