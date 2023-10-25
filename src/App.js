import { Console } from '@woowacourse/mission-utils'; 
import NumberGenerator from './NumberGenerator.js';
import BallCounter from './BallCounter.js';

class App {
  COUNT_OF_NUMBERS = 3; 

  validateUserInput(input) {
    if (input === null) {
      throw new Error("입력은 중복 없는 3자리 숫자로 입력해주세요.");
    } 
    else if (!/^[1-9]{3}$/.test(input)) {
      throw new Error("1부터 9까지의 숫자로 이루어진 3자리 숫자를 입력하세요.");
    }
  

    const inputArray = input.split('').map(Number);
    const inputSet = new Set(inputArray);

    if (inputArray.length !== inputSet.size) {
      throw new Error("중복되는 숫자 없이 입력하세요.");
    }
    return inputArray;
  } 

  outputResultString(strikeCount, ballCount) {
    let result = '';

    if (ballCount > 0) {
      result += `${ballCount}볼`;
    }
    if (strikeCount > 0) {
      if (result.length > 0) result += " "; 
      result += `${strikeCount}스트라이크 `;
    }
    if (result === '') {
      result = "낫싱";
    }
    return result;
  }


  async play() {
    while(true) {
      Console.print("숫자 야구 게임을 시작합니다");
  
      const targetNumber = NumberGenerator.generateUniqueRandomNumbers(this.COUNT_OF_NUMBERS, 1, 9);
      Console.print(targetNumber);
      let gameEnded = false;
    
      while (!gameEnded) {
        const userInput = await Console.readLineAsync("숫자를 입력해주세요: ");
        
        try {
          const inputNumberList = await this.validateUserInput(userInput);
          const strikeCount = BallCounter.getStrike(inputNumberList, targetNumber);
          const ballCount = BallCounter.getBall(inputNumberList, targetNumber);
        
          const result = await this.outputResultString(strikeCount, ballCount);
          Console.print(result);
    
          if (strikeCount === this.COUNT_OF_NUMBERS) {
            Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            gameEnded = true;
          }
        } catch (error) {
          Console.print("[ERROR] " + error.message);
        }
      }
      const userContinueInput = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (userContinueInput === '2') {
        break;
      }
    }
  }
}

export default App;

