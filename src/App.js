import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.StartMessage(); // StartMessage 메서드 호출
    let answer = this.MakeRandomNumbers();

    let userInput = [];

    while (true) {
      userInput = await this.InputPlayerNumbers();
      let result = this.JudgeNumber(answer, userInput);

      if (result.strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
        break;
      }
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
    Console.print(computer);
    return computer;
  }

  async InputPlayerNumbers() {
    try {
      const input = await Console.readLineAsync('숫자를 입력해주세요 :');
      let playerNumber = [];
      playerNumber = input.split('').map((number) => parseInt(number));

      if (playerNumber.length === 3 && new Set(playerNumber).size === 3) {
        // Console.print(playerNumber);
      } //else {
      //   Console.print('서로 다른 3가지 숫자를 입력해주세요.');
      //   return this.InputPlayerNumbers(); // 잘못된 입력에 대해 재귀 호출
      // }

      return playerNumber; // 입력이 유효한 경우 반환
    } catch (error) {
      // 예외 처리는 잘못된 입력과 관련된 오류에 사용
      Console.print('[Error]');
    }
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
}

const app = new App();
app.play();

export default App;
