import { Console, Random } from "@woowacourse/mission-utils";

const ANSWER_LENGTH = 3;
const NUMBER_RANGE = /^[1-9]+$/;

class App {

  constructor() {
    this.answer = null;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.answer = this.createAnswer();
    this.toggleGame('playing');
  }

  async toggleGame(status) {
    switch(status){
      case 'playing':{
        const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
        this.validateAndThrowError(inputNumber)

        const scoreInfo = this.createScore(inputNumber);

        if (scoreInfo.strike === ANSWER_LENGTH) {
          await this.toggleGame("clear");
        } 
        break;
      }
      case 'clear':
      default: break;
    }
  }

  createAnswer() {
    const answer = [];
    while (answer.length < ANSWER_LENGTH) {
      const number = String(Random.pickNumberInRange(1, 9));
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer.join("");
  }

  createScore(inputNumber) {
    const scoreInfo = { strike: 0, ball: 0 };
    for(let i = 0 ; i < ANSWER_LENGTH ; i++){
      const currentNumber = inputNumber[i];
      if(currentNumber === this.answer[i]){
        scoreInfo.strike++;
        continue;
      }
      if(this.answer.includes(currentNumber)){
        scoreInfo.ball++;
      }
    }
    return scoreInfo;
  }

  validateAndThrowError(inputNumber){
    if (inputNumber.length !== ANSWER_LENGTH || new Set(inputNumber).size !== ANSWER_LENGTH)
      throw new Error(`[ERROR] 1부터 9까지 서로 다른 수로 이루어진 ${ANSWER_LENGTH}자리 숫자를 입력해야 합니다.`);
    if(!NUMBER_RANGE.test(inputNumber))
      throw new Error(`[ERROR] 1부터 9까지의 수가 아닙니다.`);
    if(inputNumber.includes(" "))
      throw new Error(`[ERROR] 공백 없이 숫자를 입력해야합니다.`);
  }
}

export default App;