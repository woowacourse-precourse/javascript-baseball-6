import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  #computerAnswer;

  constructor() {
    this.#initialize();
  }

  #generateRandomNumber() {
    const computer = new Set();

    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    return [...computer].join('');
  }
  #initialize() {
    this.#computerAnswer = this.#generateRandomNumber();
  }

  #validateNumberInput(numberInput) {
    const numericRegex = /^[1-9]{3}$/;

    if (!numericRegex.test(numberInput)) {
      throw new Error(
        '[ERROR] 1-9사이의 3자리 숫자만 입력해 주세요. 올바른 예시 : "123"'
      );
    }

    if (new Set([...numberInput]).size !== 3) {
      throw new Error(
        '[ERROR] 1-9사이의 중복하지 않는 3자리의 수를 입력해 주세요. 올바른 예시 : "123"'
      );
    }

    return numberInput;
  }

  #validateRestartInput(restartInput) {
    if (restartInput !== '1' && restartInput !== '2') {
      throw new Error('[ERROR] 1 혹은 2를 입력해 주세요.');
    }

    return restartInput;
  }

  #calculateGameHint(computerAnswer, numberInput) {
    let STRIKE_COUNT = 0;
    let BALL_COUNT = 0;

    for (let i = 0; i < 3; i++) {
      if (computerAnswer[i] === numberInput[i]) {
        STRIKE_COUNT += 1;
      } else if (computerAnswer.includes(numberInput[i])) {
        BALL_COUNT += 1;
      }
    }

    let hintMessage = '';

    if (BALL_COUNT > 0) {
      hintMessage += `${BALL_COUNT}볼 `;
    }
    if (STRIKE_COUNT > 0) {
      hintMessage += `${STRIKE_COUNT}스트라이크`;
    }
    if (BALL_COUNT === 0 && STRIKE_COUNT === 0) {
      hintMessage += '낫싱';
    }

    return MissionUtils.Console.print(hintMessage);
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (true) {
      const numberInput = this.#validateNumberInput(
        await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
      );

      if (numberInput === this.#computerAnswer) {
        MissionUtils.Console.print(
          '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
        );

        const restartInput = this.#validateRestartInput(
          await MissionUtils.Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
          )
        );

        if (restartInput === '1') {
          this.#initialize();
          continue;
        }

        if (restartInput === '2') {
          return;
        }
      }

      this.#calculateGameHint(this.#computerAnswer, numberInput);
    }
  }
}

export default App;
