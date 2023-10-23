import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}

  generateComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  isValidInput(input) {
    // 입력값의 길이가 3인지 확인
    if (input.length !== 3) {
      return false;
    }

    // 입력값이 숫자인지 확인
    if (isNaN(input)) {
      return false;
    }

    // 입력값의 각 자리 수가 1에서 9까지인지 확인
    const digits = input.split("").map(Number);
    const validDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return digits.every((digit) => validDigits.includes(digit));
  }

  calculateResult(userGuess, computerNumbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < userGuess.length; i++) {
      if (userGuess[i] === computerNumbers[i]) {
        strike++;
      } else if (computerNumbers.includes(userGuess[i])) {
        ball++;
      }
    }

    if (strike === 3) {
      return "3스트라이크";
    } else if (strike > 0 || ball > 0) {
      return `${ball > 0 ? `${ball}볼 ` : ""}${
        strike > 0 ? `${strike}스트라이크` : ""
      }`;
    } else {
      return "낫싱";
    }
  }
}

export default App;
