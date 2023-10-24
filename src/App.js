import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      await this.gameFlow();
      const userRestartInput = await this.getUserRestartInput();
      if (userRestartInput !== 1) {
        break;
      }
    }
  }
  // 게임 실행 흐름을 책임지는 함수
  async gameFlow() {
    const COMPUTER_ANSWER = this.createComputerAnswer();
    let isUserWon = false;

    while (!isUserWon) {
      isUserWon = await this.checkUserGuess(COMPUTER_ANSWER);
    }
    return;
  }

  // 사용자 입력을 받는 getUserInput
  async getUserInput() {
    try {
      const answer = await Console.readLineAsync('숫자를 입력해주세요 : ');

      const userInput = answer.split('');

      if (
        userInput.length !== 3 ||
        userInput.some((char) => isNaN(parseInt(char, 10)))
      ) {
        throw new Error(
          '[ERROR] 1에서 9 사이의 서로 다른 세 숫자를 입력해 주세요.'
        );
      }

      return userInput.map((char) => parseInt(char, 10));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // 랜덤한 컴퓨터 정답을 생성하는 함수
  createComputerAnswer = () => {
    let computerAnswer = [];
    while (computerAnswer.length < 3) {
      let randomNum = Random.pickNumberInRange(1, 9);

      if (!computerAnswer.includes(randomNum)) {
        computerAnswer.push(randomNum);
      }
    }
    return computerAnswer;
  };

  // 낫싱을 확인하는 함수
  isNothing = (userGuess, computerAnswer) => {
    return userGuess.filter((x) => computerAnswer.includes(x)).length === 0
      ? true
      : false;
  };

  // 스트라이크와 볼을 확인하는 함수
  checkStrikeOrBall = (userGuess, computerAnswer) => {
    let strikeCount = 0,
      ballCount = 0;

    for (let i = 0; i < userGuess.length; i++) {
      if (userGuess[i] === computerAnswer[i]) {
        strikeCount += 1;
      } else if (computerAnswer.includes(userGuess[i])) {
        ballCount += 1;
      }
    }

    return { strikeCount, ballCount };
  };

  // 사용자의 추측을 출력하는 함수
  printGuessResult = (guessResult) => {
    if (guessResult.strikeCount === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (guessResult.strikeCount === 0) {
      Console.print(`${guessResult.ballCount}볼`);
    } else if (guessResult.ballCount === 0) {
      Console.print(`${guessResult.strikeCount}스트라이크`);
    } else
      Console.print(
        `${guessResult.ballCount}볼 ${guessResult.strikeCount}스트라이크`
      );
  };

  // 사용자의 입력을 받고 체크하는 과정의 함수
  async checkUserGuess(computerAnswer) {
    let userGuess = await this.getUserInput();
    if (this.isNothing(userGuess, computerAnswer)) {
      Console.print('낫싱');
      return false;
    } else {
      let guessResult = this.checkStrikeOrBall(userGuess, computerAnswer);
      this.printGuessResult(guessResult);
      if (guessResult.strikeCount === 3) {
        return true;
      }
    }
    return false;
  }

  // 게임 종료 후 재시작 여부를 확인하는 함수
  async getUserRestartInput() {
    try {
      const answer = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
      );

      if (parseInt(answer) === 1 || parseInt(answer) === 2) {
        return parseInt(answer);
      } else {
        throw new Error('[ERROR] 1 또는 2의 숫자만 입력해 주세요.');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
