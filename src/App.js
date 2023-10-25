import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.isPlaying = true;
    this.isFirstRound = true;
    this.createdOpponentNumber = [];
  }

  createAndSetOpponentNumber() {
    const opponentNumber = new Set();

    while (opponentNumber.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      opponentNumber.add(randomNumber);
    }
    this.createdOpponentNumber = [...opponentNumber];
  }

  isVerified(userInput) {
    // 1. 3자리 수가 아님
    if (!userInput || userInput.length !== 3) {
      throw new Error('[ERROR] 3자리 수를 입력해 주세요');
    }

    // 2. 중복이 있음
    if (
      userInput[0] === userInput[1] ||
      userInput[1] === userInput[2] ||
      userInput[2] === userInput[0]
    ) {
      throw new Error('[ERROR] 서로 다른 수 3자리를 입력해 주세요');
    }

    return true;
  }

  check(userInput) {
    let ball = 0;
    let strike = 0;

    userInput.forEach((number, idx) => {
      if (this.createdOpponentNumber[idx] === number) strike++;
      else if (this.createdOpponentNumber.includes(number)) ball++;
    });
    if (strike === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.isPlaying = false;
      this.askRestart();
    } else if (ball === 0 && strike === 0) {
      Console.print('낫싱');
    } else if (ball > 0 && strike > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball > 0) {
      Console.print(`${ball}볼`);
    } else if (strike > 0) {
      Console.print(`${strike}스트라이크`);
    }
  }

  async askRestart() {
    const restart = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );
    if (restart === '1') {
      this.play();
    } else if (restart === '2') {
      this.isPlaying = false;
    } else {
      throw new Error('[ERROR] 1과 2 중 하나를 입력해주세요.');
    }
  }

  async play() {
    if (this.isFirstRound) {
      Console.print('숫자 야구 게임을 시작합니다.');
      this.isFirstRound = false;
    }
    this.isPlaying = true;

    this.createAndSetOpponentNumber();

    while (this.isPlaying) {
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if (this.isVerified(userInput)) {
        this.check(userInput.split('').map(Number));
      }
    }
  }
}

export default App;
