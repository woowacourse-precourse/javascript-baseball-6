import { Console } from "@woowacourse/mission-utils";
import { NUMBER, FLAG } from "../utils/Constant";
import Computer from "../utils/Computer";
import Check from "../utils/Check";
import Input from "../view/Input";
import Output from "../view/Ouput";

class BaseballGame {
  constructor () {}

  // 시작
  async start() {
    console.log(await Output.getStart());
    await this.getComputerNumber();
  }

  // 컴퓨터 숫자 입력 (중복되지 않은 3 자리(MAX_LENGTH) 정수)
  async getComputerNumber() {
    const computer = await Computer.getComputer();
    await this.getUserNumber(computer);
  }

  // 유저 정수 입력
  async getUserNumber(computer) {
    const user = await Input.getUserNumber();
    await this.outputAnswer(user, computer);
  }
  
  // 스트라이크, 볼 확인 및 정답 출력
  async outputAnswer(user, computer) {
    const cnt = await Check.checkCount(user, computer);
    const answer = await Output.getAnswer(cnt.ball, cnt.strike);
    Console.print(answer);
    await this.checkStrike(computer, cnt.strike);
  }

  /*
  결과에 따른 다음 행동 제시
  1. 정답(3(MAX_LENGTH) strike)을 맞춘 경우, 
  성공 메세지 및 플래그 입력(1(NEW_GAME) or 2(END_GAME))
  2. 정답이 아닌 경우, 사용자 입력부터 시작
  */
  async checkStrike(computer, strike) {
    if (strike === NUMBER.MAX_LENGTH) {
      console.log(await Output.getSuccess());
      const flag = await Input.checkRestartFlag();
      if (flag == FLAG.NEW_GAME) {
        await this.getComputerNumber();
      } else if (flag == FLAG.END_GAME) {
        Console.print(await Output.getEnd());
      }
    } else {
      await this.getUserNumber(computer);
    }
  }
}

module.exports = BaseballGame;