import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
import { Messages } from "./Messages";

let ball = 0;
let strike = 0;
const computers = [];

export class Baseball {
  async gameStart() {
    // 0. 게임 시작 메세지 출력
    Console.print(Messages.START);
    // 1. 컴퓨터의 숫자 입력받기
    while (computers.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!computers.includes(number)) {
        computers.push(number);
      }
    }
    const COMPUTER = computers.join("");

    while (true) {
      let usernum = await Console.readLineAsync(Messages.INPUT);
      Console.print(Messages.INPUT + usernum);

      // [예외1] 입력한 숫자가 3개가 아닌 경우
      if (usernum.length !== 3) {
        throw "[ERROR]";
      }
      // [예외2] 중복된 숫자를 입력한 경우
      const users = [...new Set(usernum)].join("");
      if (users != usernum) {
        throw "[ERROR]";
      }
      // [예외3] 숫자가 아닌 문자를 입력한 경우
      if (typeof usernum == "number") {
        throw "[ERROR]";
      }
      for (let i = 0; i < 3; i++) {
        if (COMPUTER.includes(usernum[i])) {
          if (COMPUTER[i] === usernum[i]) strike++;
          else ball++;
        }
      }

      if (ball == 0 && strike == 0) Console.print(Messages.NOTHING);
      else if (ball > 0 && strike == 0) Console.print(ball + Messages.BALL);
      else if (ball == 0 && strike > 0) Console.print(strike + Messages.STRIKE);
      else Console.print(ball + Messages.BALL + strike + Messages.STRIKE);

      if (strike == 3) {
        Console.print(Messages.END);
        break;
      }
    }
  }
}
