import {
  Random,
  Console,
} from "@woowacourse/mission-utils";

const NUM_MIN = 1;
const NUM_MAX = 9;
const NUM_LEN = 3;

class App {
  constructor() {
    this.answer = [];
  }

  errorHandler(errorName){
    const TYPEERROR = new Error("[ERROR] 잘못된 형식의 입력입니다.");
    if (errorName === "typeError"){
      throw TYPEERROR;
    }
  }

  generateAnswer() {
    while (this.answer.length < NUM_LEN) {
      const digit = Random.pickNumberInRange(NUM_MIN, NUM_MAX);
      if (!this.answer.includes(digit)) {
        this.answer.push(digit);
      }
    }
  }

  checkInput(userInput) {
    const inputArr = userInput.split("").map(Number);
    let isOverlapping = false;
    for (let i = 0; i < NUM_LEN; i++) {
      const count = inputArr.filter(item => item === inputArr[i]).length;
      if(count > 1){
        isOverlapping = true;
        break;
      }
    }
    return (
      inputArr.length === NUM_LEN &&
      !isOverlapping &&
      inputArr.every((num) => num >= NUM_MIN && num <= NUM_MAX)
    );
  }

  isValidInput(userInput) {
    if (!this.checkInput(userInput)) {
      this.errorHandler("typeError");
    }
  }

  countBallAndStrike(input) {
    const inputArray = input.split("").map(Number);
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < NUM_LEN; i++) {
      if (inputArray[i] === this.answer[i]) {
        strike++;
      }
      else if (this.answer.includes(inputArray[i])) {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) {
      return "낫싱";
    }
    else if (strike !== 0 && ball === 0) {
      return `${strike}스트라이크`;
    }
    else if (strike === 0 && ball !== 0) {
      return `${ball}볼`;
    }
    else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }

  async gameRestart() {
    var input = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if (input !== "1" && input !== "2") {
      this.errorHandler("typeError");
    }
    return input;
  }

  async gameController() {
    var result = ""
    while (result !== "3스트라이크") {
      this.generateAnswer();
      var input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.isValidInput(input)
      result = this.countBallAndStrike(input);
      Console.print(result);
    }
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    return await this.gameRestart();
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (await this.gameController() !== '2') {
      this.answer = [];
    }
    Console.print("애플리케이션을 종료합니다.");
  }
}

const app = new App();
app.play();

export default App;
