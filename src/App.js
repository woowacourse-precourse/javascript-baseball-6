import { Console } from "@woowacourse/mission-utils";
import { getRandomNumber } from "./utils/getRandomNumber";
import { ANSWER_TABLE, ERROR_MESSAGE, GAME_MESSAGE } from "./constants/message";
import { inputUserNumber } from "./actions/inputUserNumber";


class App {
  
  constructor(){
    this.REPLAY_GAME_NUM = '1';
    this.EXIT_NUM = '2';

    Console.print(GAME_MESSAGE.START);
  }

  // 게임을 시작하는 로직
  async play() {
    const computerInput = getRandomNumber();

    while(true){
      const userInput = await inputUserNumber();
      const RESULT = await this.compareNumber(userInput , computerInput);
      const isRetryOrExit = RESULT === this.REPLAY_GAME_NUM || RESULT === this.EXIT_NUM;

      if(isRetryOrExit === false){
        Console.print(ANSWER_TABLE[RESULT]);
      }
      
      if(RESULT === this.REPLAY_GAME_NUM){
        await this.play();
        break;
      }

      if(RESULT === this.EXIT_NUM){
        break;
      }
    }
  }

  // user 입력과 computer 입력의 값을 비교하는 로직
  async compareNumber(userInput , computerInput){
    // userInput과 computerInput이 완전하게 일치하게 되면 3스트라이크 게임 종료
    if(userInput.toString() === computerInput.toString()){
      Console.print(GAME_MESSAGE.THREE_STRIKE_OUT);
      const RESULT_NUM = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

      if(RESULT_NUM === this.REPLAY_GAME_NUM || RESULT_NUM === this.EXIT_NUM){
        return RESULT_NUM
      }

      throw Error(ERROR_MESSAGE.OUT_RANGE_INPUT_NUMBER);
    }

    // 완전하게 일치하지 않을때 비교하는 로직
    return await this.calculateStrikeOrBall(userInput,computerInput);
  }

  async calculateStrikeOrBall(userInput,computerInput){
    let strike = 0;
    let ball = 0;
    
    computerInput.forEach((_,index) => {
      if (computerInput[index] === userInput[index]) {
        return strike += 1;
      }

      if (computerInput.includes(userInput[index])) {
        return ball += 1;
      }
    });

    return `${ball}b${strike}s`;
  }
}

export default App;
