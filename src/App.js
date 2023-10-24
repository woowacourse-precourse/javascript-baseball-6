import { Random, Console } from "@woowacourse/mission-utils";
// import App from "../src/App.js";

export default class App {
  constructor() {
    this.computerNumbers = [];
    this.shouldRun = true;
  }

  generateRandomNumbers() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  getGameResult(userNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < this.computerNumbers.length; i++) {
      if (userNumbers[i] === this.computerNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) {
      return "낫싱";
    }

    // 결과 문자열을 조건에 따라 생성
    let result = '';
    if (balls > 0) {
      result += `${balls}볼 `;
    }
    if (strikes > 0) {
      result += `${strikes}스트라이크`;
    }

    return result;


  }

  async startNewGame() {
    this.generateRandomNumbers();
    Console.print("숫자 야구 게임을 시작합니다.");
    let attempts = 0;
    while (this.shouldRun) {
      attempts++;
      const userInput = await Console.readLineAsync("서로 다른 3자리의 숫자를 입력하거나 게임을 종료하려면 1을 입력하세요: ");
      if (userInput === "1") {
        Console.print("게임을 종료합니다.");
        this.shouldRun = false;
        //break; // console에 값을 안내보내서 break와 this.shouldRun = false;가 중첩을 일으키나 싶어 제거해봄
      }

      const userNumbers = userInput.trim().split("").map((num) => parseInt(num));

      if (userNumbers.length == 3 && userNumbers.some((num, index) => userNumbers.indexOf(num) !== index) && userNumbers.every(num => !isNaN(num))) { // 3자리는 입력하였으나 입력한 값에 중복이 있는지를 검사
        throw new Error("[ERROR] 잘못된 값을 입력하였습니다. 서로 다른 3자리의 숫자를 입력하세요.");

      } else if (userNumbers.length > 3 && userNumbers.every(num => !isNaN(num))) {
        throw new Error("[ERROR] 입력된 값이 3자리를 넘었습니다.") // 입력된 값이 3자리를 초과할 경우

      } else if (userNumbers.length < 3 && userNumbers.every(num => !isNaN(num))) {
        throw new Error("[ERROR] 3자리 이상 입력하세요.") // 입력된 값이 3자리 미만일 경우

      } else if (userNumbers.some(num => isNaN(num))) {
        throw new Error("[ERROR] 숫자만 입력하세요.")
      }

      const result = this.getGameResult(userNumbers);
      if (result === "3스트라이크") {
        Console.print(`축하합니다! ${userNumbers.join("")}를 ${attempts}번만에 맞추셨습니다! 게임 종료`);
        this.shouldRun = false;
        // break;
      } else if (result === "낫싱") {
        Console.print("낫싱");
      } else {
        Console.print(result);
      }
    }
    // this.startNewGame();
  }

  play() {
    this.startNewGame();
  }
}

const baseballGame = new App();
baseballGame.play();