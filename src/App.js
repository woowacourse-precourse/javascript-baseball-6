import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = new Computer();
    this.playerInput = new PlayerInput();
    // 게임이 진행 중인지 여부
    this.isPlaying = false;
  }
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.isPlaying = true;

    // 게임이 종료될 때까지 유저 입력받기 반복
    while (this.isPlaying) {
      const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

      // 유저 입력값이 유효한지 검사하고 유효하지 않다면 게임 종료
      if (!this.playerInput.isValidate(userInput)) {
        this.endGame();
        throw new Error('유효하지 않은 입력값입니다.');
      }
    }
  }

  endGame() {
    this.isPlaying = false;
  }
}

class PlayerInput {
  isValidate(userInput) {
    // 유저 입력값이 유효한지 검사
    return this.isLengthValid(userInput) && this.isNumberValid(userInput);
  }

  isLengthValid(userInput) {
    // 유저 입력값이 3자리 숫자인지 검사
    if (userInput.length !== 3) {
      MissionUtils.Console.print('3자리 숫자를 입력해주세요.');
      return false;
    }
    return true;
  }

  isNumberValid(userInput) {
    // 유저 입력값이 숫자인지 검사
    if (isNaN(userInput)) {
      MissionUtils.Console.print('숫자를 입력해주세요.');
      return false;
    }
    return true;
  }
}

/**
 * 컴퓨터는 0~9 사이의 서로 다른 임의의 수 3개를 선택한다.
 */
class Computer {
  constructor() {
    // Computer 클래스가 생성될 때 랜덤한 숫자를 생성한다.
    this.targetNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    // 중복되지 않은 랜덤한 3개의 숫자 배열
    const numbers = [];
    while (numbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      // 중복되지 않는 숫자를 뽑기 위해 Array.prototype.includes 로 중복을 체크한다.
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    // 배열을 문자열로 변환하여 리턴
    return numbers.join('');
  }
}

const app = new App();
app.play();

export default App;
