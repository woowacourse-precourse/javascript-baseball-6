import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.playGame(this.makeNumber());
  }

  makeNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async playGame(computerNum) {
    while (true) {
      const playerNum = await Console.readLineAsync('숫자를 입력해주세요 : ');
      this.checkplayerNum(playerNum);
      const score = this.getScore(computerNum, playerNum);
      this.printScore(score);
      if (score.strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }
    this.restartGame();
  }

  checkplayerNum(playerNum) {
    const setNum = new Set(playerNum);

    if (playerNum.length !== 3) {
      throw new Error('3자리 숫자를 입력하셔야합니다.');
    }

    if (setNum.size !== 3) {
      throw new Error('숫자는 중복되어선 안됩니다.');
    }

    setNum.forEach((element) => {
      if (isNaN(element)) {
        throw new Error('숫자만 입력해주세요.');
      }

      if (element === '0') {
        throw new Error('입력가능한 숫자의 범위는 1~9입니다.');
      }
    });
  }

  getScore(computerNum, playerNum) {
    let ball = 0;
    let strike = 0;

    for (let index = 0; index < 3; index++) {
      if (Number(computerNum[index]) === Number(playerNum[index])) strike += 1;
      else if (computerNum.includes(Number(playerNum[index]))) ball += 1;
    }

    return { ball, strike };
  }

  printScore(score) {
    const BALL = score.ball;
    const STRIKE = score.strike;

    if (BALL !== 0 && STRIKE !== 0) Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    else if (BALL !== 0 && STRIKE === 0) Console.print(`${BALL}볼`);
    else if (BALL === 0 && STRIKE !== 0) Console.print(`${STRIKE}스트라이크`);
    else Console.print('낫싱');
  }

  async restartGame() {
    const gameFlag = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    if (gameFlag === '1') this.playGame(this.makeNumber());
    else if (gameFlag === '2') return;
    else throw new Error('1과 2만 입력이 가능합니다.');
  }
}

export default App;
