import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 시작 문구 출력
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.playing();
  }

  async playing() {
    const computerNum = this.setRandomNum();

    while (true) {
      const playing = await this.checkGuess(computerNum);
      if (playing === 1) {
        break;
      }
    }

    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.askRetry();

  }


  // 컴퓨터 임의의 수 3개 선택
  setRandomNum() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  //사용자 입력 받음
  async getGuess() {
    const guess = await Console.readLineAsync('숫자를 입력해주세요 : ');

    // ERROR
    if (guess.length !== 3) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    } else if (guess === null) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    } else if (guess.includes('0')) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    } else if (guess[0] === guess[1] || guess[0] === guess[2] || guess[1] === guess[2]) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return guess;
  }

  // 사용자 입력 수와 컴퓨터 임의의 수 비교
  async checkGuess(computerNum) {
    const userGuess = await this.getGuess();
    const state = {
      continue: 0,
      end: 1,
    };

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (parseInt(userGuess[i]) === computerNum[i]) {
        strike++;
      }
      for (let j = 0; j < 3; j++) {
        if ((i !== j) && (parseInt(userGuess[i]) === computerNum[j])) {
          ball++;
        }
      }
    }

    // 결과 출력
    if (strike === 3) {
      Console.print('3스트라이크');
      return state.end;

    } else if (strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
      return state.continue;

    } else if (strike !== 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
      return state.continue;

    } else if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      return state.continue;

    } else {
      Console.print('낫싱');
      return state.continue;
    }
  }

  async askRetry() {
    const choice = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (choice === '1') {
      this.play();
    } else if (choice === '2') {
      Console.print('게임을 종료합니다.');
    }
  }

}

export default App;