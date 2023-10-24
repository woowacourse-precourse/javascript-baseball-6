import * as MissionUtils from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {
  #computer;

  async play() {
    Console.log(print("게임을 시작합니다."));
    this.setComputer;

    return this.computerAnswer();
  }

  async setComputer() {
    const NUMBERS = [];
    while (NUMBERS.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!NUMBERS.includes(num)) {
        NUMBERS.push(num);
      }
    }

    this.#computer = NUMBERS;

    return;
  }
  async userAnswer() {
    const INPUT_ANSWER = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const TURN_INTO_NUMBER = INPUT_ANSWER.split("").map(Number);
    await this.validateAnswer(TURN_INTO_NUMBER);

    return TURN_INTO_NUMBER;
  }

  async compareAnswer() {
    const USER_ANSWER = await this.userAnswer();
    let strike = 0;
    let ball = 0;

    USER_ANSWER.map((num,i) => {
      if(num==this.#computer[i]) {
        strike++
      } else if (this.#computer.includes(num)){
        ball++
      }
    })

    this.giveHint(strike,ball) {
      if(strike==0 && ball ==0){
        Console.print("낫싱")
      } else if (strike!==0 && ball==0) {
        Console.print(`${strike}스트라이크`)
      } else if (strike ==0 && ball!==0) {
        Console.print(`${ball}볼`)
      } else {
        Console.print(`${ball}볼 ${strike}스트라이크`)
      }
      return
    }
  }
}

export default App;
