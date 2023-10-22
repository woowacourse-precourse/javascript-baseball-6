import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      this.StartMessage();
      // let answer = this.MakeRandomNumbers();
      let regame = 1;
      let answer;

      while (regame === 1) {
        answer = this.MakeRandomNumbers();

        while (true) {
          let userInput = await this.InputPlayerNumbers();
          //Console.print(answer);

          if (userInput.length !== 3 || new Set(userInput).size !== 3) {
            throw new Error('[ERROR] 숫자를 잘 못 입력했습니다.');
          }

          let result = this.JudgeNumber(answer, userInput);
          if (result.strike === 3) {
            Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            regame = await this.AskRegame();
            if (regame === 1) {
              answer = this.MakeRandomNumbers();
            }

            if (regame === 2) {
              break;
            }
          }
        }
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  StartMessage() {
    const StartMessage = '숫자 야구 게임을 시작합니다.';
    Console.print(StartMessage);
  }

  MakeRandomNumbers() {
    let computer = [];
    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    // Console.print(computer);
    return computer;
  }

  async InputPlayerNumbers() {
    let input = await Console.readLineAsync('숫자를 입력해주세요 :');
    let playerNumber = input.split('').map((number) => parseInt(number));

    return playerNumber;
  }

  JudgeNumber(computerNumber, playerNumber) {
    let computer = computerNumber;
    let player = playerNumber;

    let strike = 0;
    let ball = 0;
    let nothing = '낫싱';

    // Console.print(computer);
    // Console.print(player);

    for (let i = 0; i < 3; i++) {
      if (player[i] === computer[i]) {
        strike++;
      }
      if (
        player[i] === computer[(i + 1) % 3] ||
        player[i] === computer[(i + 2) % 3]
      ) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      Console.print(nothing);
    } else if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike === 0 && ball > 0) {
      Console.print(`${ball}볼`);
    } else if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
    }

    return { strike, ball };
  }

  async AskRegame() {
    let input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    let answer = input.split('').map((number) => parseInt(number));
    if (answer.length !== 1 || (answer[0] !== 1 && answer[0] !== 2)) {
      throw new Error('[ERROR]');
    }
    return answer[0]; // 반환값을 숫자로 변경
  }
}

const app = new App();
app.play();

export default App;
