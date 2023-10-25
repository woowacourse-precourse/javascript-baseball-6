import { Random, Console } from "@woowacourse/mission-utils";
import Player from "./Player.js";

class Computer {
  constructor() {
    // 생성자에서 answer를 초기화
    this.answer = this.createAnswer();
    console.log(this.answer);
  }

  // 정답을 만드는 함수
  createAnswer = () => {
    let arr = []; // 정답을 담을 배열
    // 1 ~ 9 사이의 중복되지 않는 숫자 3개를 arr 배열에 push
    while (arr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!arr.includes(number)) {
        arr.push(number);
      }
    }
    return arr;
  };

  // 정답과 player의 input값을 비교할 함수
  compareAnswer = (playerInput) => {
    // player의 입력값을 숫자 배열로 변환
    const inputNumber = playerInput.split("").map(Number);
    let strike = 0;
    let ball = 0;
    // player의 입력값과 정답을 비교해 strike와 ball을 변경
    for (let i = 0; i < this.answer.length; i++) {
      // 인덱스와 값이 모두 같다면 strike
      if (this.answer[i] === inputNumber[i]) {
        strike++;
        // 인덱스는 같지 않지만 값이 포함되어 있다면 ball
      } else if (this.answer.includes(inputNumber[i])) {
        ball++;
      }
    }
    this.printResult(ball, strike);
    if (strike === 3) {
      return false;
    } else {
      return true;
    }
    // return [ball, strike];
  };
  // 결과를 출력하는 함수
  printResult = (ball, strike) => {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
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
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const select = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    );
    return select;
  }
}

export default Computer;
