import { MissionUtils } from "@woowacourse/mission-utils";
import { generateComputerAnswer } from './generateComputerAnswer.js';
import { calculateResult } from './calculateResult.js';

async function getUserNumber() {
  try {
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const userNumbers = userInput.split('').map(Number);

    if(!isValidInput(userNumbers)) {
      throw new Error(`[ERROR] 사용자가 입력한 ${userInput}는 숫자가 잘못된 형식입니다.`);
    }

    return userNumbers;
  } catch (error) {
    console.error(error.message);
    return Promise.reject(error);
  }
}

const isValidInput = (userNumbers) => {
  if(userNumbers.length !== COMPUTER_ANSWER_LENGTH) {
    return false;
  }

  const set = new Set(userNumbers);
  if(set.size !== userNumbers.length) {
    return false;
  }

  for(const num of userNumbers) {
    if(num < 1 || num > 9) {
      return false;
    }
  }

  return true;
};

const COMPUTER_ANSWER_LENGTH = 3;

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const computerAnswer = generateComputerAnswer(COMPUTER_ANSWER_LENGTH);

    while (true) {
      const userGuess = await getUserNumber();

      const { strike, ball, message } = calculateResult(computerAnswer, userGuess);

      MissionUtils.Console.print(message);

      if (strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }

    const playOption = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");
    
    if(playOption === '1') {
      this.play();
    } else if(playOption === '2') {
      MissionUtils.Console.print("게임을 종료합니다.");
    }
  }
}

export default App;

const app = new App();
app.play();
