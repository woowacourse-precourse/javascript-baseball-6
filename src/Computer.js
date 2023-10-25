import { Random, Console } from "@woowacourse/mission-utils";

class Computer {
  static LENGTH_INPUT = 3;
  static MAX_NUM = 9;
  static MIN_NUM = 1;
  static NOTHING_ERROR = "낫싱";
  static SUCESS_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  static SELECT_MESSAGE =
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

  constructor() {
    // 생성자에서 answer를 초기화
    this.answer = this.createAnswer();
    console.log(this.answer);
  }

  // 정답을 만드는 함수
  createAnswer = () => {
    let arr = [];
    while (arr.length < Computer.LENGTH_INPUT) {
      const number = Random.pickNumberInRange(
        Computer.MIN_NUM,
        Computer.MAX_NUM,
      );
      if (!arr.includes(number)) {
        arr.push(number);
      }
    }
    return arr;
  };

  // 정답과 player의 input값을 비교할 함수
  compareAnswer = (playerInput) => {
    const inputNumber = playerInput.split("").map(Number);
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < Computer.LENGTH_INPUT; i++) {
      if (this.answer[i] === inputNumber[i]) {
        strike++;
      } else if (this.answer.includes(inputNumber[i])) {
        ball++;
      }
    }
    this.printResult(ball, strike);
    if (strike === Computer.LENGTH_INPUT) {
      return false;
    } else {
      return true;
    }
  };
  // 결과를 출력하는 함수
  printResult = (ball, strike) => {
    if (ball === 0 && strike === 0) {
      Console.print(Computer.NOTHING_ERROR);
    }
    if (ball > 0 && strike === 0) {
      Console.print(`${ball}볼`);
    }
    if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    }
    if (ball > 0 && strike > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  };

  // Playe가 정답을 맞췄을 경우
  async correctAnswer() {
    Console.print(Computer.SUCESS_MESSAGE);
    const select = await Console.readLineAsync(Computer.SELECT_MESSAGE);
    return select;
  }
}

export default Computer;
