import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  compareNumbers(comNum, userNum) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < comNum.length; i++) {
      for (let j = 0; j < userNum.length; j++) {
        if (i === j && comNum[i] === userNum[j]) {
          strike++;
        } else if (comNum[i] === userNum[j]) {
          ball++;
        }
      }
    }
    return [strike, ball];
  }

  async getUserGuess() {
    const userGuess = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ');
  
    // 입력값이 올바르지 않으면 예외를 throw
    if (!this.isValidInput(userGuess)) {
      console.log('[ERROR] 숫자가 잘못된 형식입니다.');
      throw new Error('Invalid input');
    }
  
    return userGuess.split('').map((char) => parseInt(char, 10));
  }
  
  isValidInput(input) {
    return /^\d{3}$/.test(input); // 입력값이 3자리 숫자인지 확인
  }

  async playAgain() {
    let response;
    while (true) {
      response = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if (response === '1' || response === '2') {
        break;
      } else {
        console.log('올바른 입력이 아닙니다. 1 또는 2를 입력하세요.');
      }
    }
    return response === '1';
  }

  async play() {
    console.log('숫자 야구 게임을 시작합니다.');

    while (true) {
      const userGuess = await this.getUserGuess();
      const result = this.compareNumbers(this.computerNumber, userGuess);

      if (result[0] === 3) {
        console.log('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        if (await this.playAgain()) {
          this.computerNumber = this.generateRandomNumber();
        } else {
          break;
        }
      } else if (result[1] > 0 || result[0] > 0) {
        console.log(`${result[1]} 볼 ${result[0]} 스트라이크`);
      } else {
        console.log('낫싱');
      }
    }
  }
}

const game = new App();
game.play();

export default App;
