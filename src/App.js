import { MissionUtils } from "@woowacourse/mission-utils";

async function getUserNumber() {
  try {
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const userNumbers = userInput.split('').map(Number);

    if(!isValidInput(userNumbers)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return userNumbers;
  } catch (error) {
    console.error(error.message);
    return Promise.reject(error);
  }
}

const isValidInput = (userNumbers) => {
  if(userNumbers.length !== 3) {
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

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const computerAnswer = generateComputerAnswer();

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

const generateComputerAnswer = () => {
  const computerAnswer = [];
  while (computerAnswer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerAnswer.includes(number)) {
      computerAnswer.push(number);
    }
  }
  return computerAnswer;
};

const calculateResult = (computerAnswer, userGuess) => {
  let strike = 0;
  let ball = 0;

  computerAnswer.forEach((answer, index) => {
    if (answer === userGuess[index]) {
      strike += 1;
    } else if (userGuess.includes(answer)) {
      ball += 1;
    }
  });

  let message = '';
  if (strike === 0 && ball === 0) {
    message = '낫싱';
  } else {
    if (ball > 0) {
      message += `${ball}볼`;
    }
    if (strike > 0) {
      if (ball > 0) {
        message += ' ';
      }
      message += `${strike}스트라이크`;
    }
  }
  
  return { strike, ball, message };
};

export default App;

const app = new App();
app.play();
