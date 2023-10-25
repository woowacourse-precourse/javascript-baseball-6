import { Console, Random } from "@woowacourse/mission-utils";
const InputError = require("./lib/utils/error.js");
const { GAME_MESSAGE } = require("./lib/constants/message.js");
const { WORD } = require("./lib/constants/word.js");

class App {
  constructor() {
    this.Error = new InputError();
  }

  async play() {
    this.startGame();

    do {
      await this.playGame();
    } while (await this.replayGame());
  }

  // startGame : 숫자 야구 게임 시작
  startGame() {
    Console.print(GAME_MESSAGE.START);
  }

  // playGame : 숫자 야구 게임 플레이
  async playGame() {
    const randomNumber = this.createRandomNumber();

    let isCorrect = false;

    while (!isCorrect) {
      const user = await this.inputUserNumber();
      const comparedResult = this.compareNumber(user, randomNumber);
      isCorrect = this.checkComparedResult(comparedResult);
    }
  }

  // creatRandomNumber: 컴퓨터가 랜덤한 세 자리 숫자를 생성
  createRandomNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber;
  }

  // inputUserNumber: 사용자의 올바른 입력값 저장
  async inputUserNumber() {
    const input = await Console.readLineAsync(GAME_MESSAGE.INPUT);
    this.Error.validateUserInput(input);
    const numbers = input.split("").map((value) => Number(value));

    return numbers;
  }

  // compareNumber: 컴퓨터 랜덤값과 사용자의 입력값을 비교하여 결과 object 생성
  compareNumber(user, random) {
    const result = { ball: 0, strike: 0 };

    user.forEach((userNumber, index) => {
      if (random.includes(userNumber)) {
        if (random.indexOf(userNumber) === index) {
          result.strike++;
        } else {
          result.ball++;
        }
      }
    });

    return result;
  }

  // checkComparedResult : 결과 object에 따라 결과 안내 메시지 출력
  checkComparedResult(result) {
    let resultMessage = "";

    if (result.strike === 0 && result.ball === 0) {
      resultMessage += WORD.NOTHING;
    }

    if (result.ball > 0) {
      resultMessage += `${result.ball}${WORD.BALL} `;
    }

    if (result.strike > 0) {
      resultMessage += `${result.strike}${WORD.STRIKE}`;
    }

    Console.print(resultMessage);

    if (result.strike === 3) {
      Console.print(GAME_MESSAGE.FINISH);
      return true;
    } else {
      return false;
    }
  }

  // replayGame : 사용자가 계속 게임을 이어나갈지, 종료할지 결정
  async replayGame() {
    const input = await Console.readLineAsync(GAME_MESSAGE.REPLAY);

    switch (input) {
      case WORD.RETRY:
        return true;
      case WORD.EXIT:
        return false;
      default:
        this.Error.validateRetryInput(input);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
