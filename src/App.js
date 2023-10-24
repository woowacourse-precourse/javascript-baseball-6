import { Random, Console } from "@woowacourse/mission-utils";

class App {

  async play() {
    // 시작 메세지 및 입력 메세지 출력
    Console.print("숫자 야구 게임을 시작합니다.");
    const inputNumber = Console.readLineAsync("숫자를 입력해주세요 : ")
    // 입력값이 형식에 맞지 않을 경우 에러 메세지 출력
    if (!this.isValidNumber(await inputNumber)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    this.countBallStrike(this.generateRandomNumber() ,await inputNumber);
  }

  // 1~9까지 서로 다른 수로 이루어진 세자릿수 생성
  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  // 볼과 스트라이크의 개수 세기
  countBallStrike(computerGenerateNumber, userInputNumber) {
    let ball = 0;
    let strike = 0;
    for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
      for (let userIndex = 0; userIndex < 3; userIndex++) {
        if (computerGenerateNumber[computerIndex] === userInputNumber[userIndex]) {
          if (computerIndex === userIndex) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }
    if (strike === 0 && ball === 0) {
      return ("낫싱");
    }
    else {
      return {strike, ball};
    }
  }

  // 플레이어가 입력한 값의 유효성 검사
  isValidNumber(input) {
    // 세자릿수가 아닐경우 false 반환
    if (input.length !==3) {
      return false;
    }
    // 서로다른 수로 이루어지지 않았을 경우 false 반환
    if (input[0]===input[1]) {
      return false;
    }
    if (input[1]===input[2]) {
      return false;
    }
    if (input[2]===input[3]) {
      return false;
    }
    // 숫자가 아닐경우 false 반환
    if (isNaN(input)) {
      return false;
    }
    return true;
  }
}

const app = new App();
app.play();

export default App;