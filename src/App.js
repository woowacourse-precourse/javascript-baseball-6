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
    try {
      const playerNum = await Console.readLineAsync('숫자를 입력해주세요 : ');
      this.checkplayerNum(playerNum);
    } catch (error) {
      Console.print(error);
    }
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
}

const app = new App();
app.play();

export default App;
