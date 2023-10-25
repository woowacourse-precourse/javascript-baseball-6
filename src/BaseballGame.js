import { MissionUtils } from '@woowacourse/mission-utils';

class BaseballGame {
  #targetNumbers;
  #userNumbers;
  #strikeCnt;
  #ballCnt;

  constructor() {
    this.#targetNumbers = [];
    this.#userNumbers = [];
    this.#strikeCnt = 0;
    this.#ballCnt = 0;
  }

  selectTargetNumbers() {
    for (let i = 0; i < 3; i++) {
      const randomNuber = MissionUtils.Random.pickNumberInRange(1, 9);
      this.#targetNumbers.push(randomNuber);
    }
  }

  async getUserNumbers() {
    const CONSOLE_MESSAGE = '숫자를 입력해주세요 : ';
    let numbers = '';

    try {
      numbers = await MissionUtils.Console.readLineAsync(CONSOLE_MESSAGE);
      this.#userNumbers = [...numbers].map((number) => Number(number));
    } catch (error) {}
  }

  validateUserNumbers() {
    const ERROR_MESSAGES = {
      INVALID_NUMBERS_LENGTH: '[ERROR] 3개의 숫자만 입력해주세요.',
      INVALID_INPUT_NUMBER: '[ERROR] 숫자만 입력해주세요.',
      INVALID_DUPLICATE_NUMBERS: '[ERROR] 서로 다른 임의의 수를 입력해주세요.',
      OUT_OF_RANGE: '[ERROR] 범위는 1-9까지여야 합니다',
    };

    // 입력된 숫자가 3개인지 확인.
    if (this.#userNumbers.length != 3) {
      MissionUtils.Console.print(ERROR_MESSAGES.INVALID_DUPLICATE_NUMBERS);
      throw new Error(ERROR_MESSAGES.INVALID_DUPLICATE_NUMBERS);
    }

    // 각 숫자가 범위 내의 숫자인지 확인.
    this.#userNumbers.forEach((number) => {
      if (isNaN(number)) {
        MissionUtils.Console.print(ERROR_MESSAGES.INVALID_INPUT_NUMBER);
        throw new Error(ERROR_MESSAGES.INVALID_INPUT_NUMBER);
      } else if (number <= 0 || 9 < number) {
        MissionUtils.Console.print(ERROR_MESSAGES.OUT_OF_RANGE);
        throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
      }
    });

    // 숫자 중복 여부 확인
    const isDuplicate =
      new Set(this.#userNumbers).size !== this.#userNumbers.length;
    if (isDuplicate) {
      MissionUtils.Console.print(ERROR_MESSAGES.INVALID_DUPLICATE_NUMBERS);
      throw new Error(ERROR_MESSAGES.INVALID_DUPLICATE_NUMBERS);
    }
  }

  compareNumbers() {
    const targetSet = new Set(this.#targetNumbers);

    for (let i = 0; i < 3; i++) {
      const userNumber = this.#userNumbers[i];

      if (this.#targetNumbers[i] === userNumber) {
        this.#strikeCnt += 1;
      } else if (targetSet.has(userNumber)) {
        this.#ballCnt += 1;
      }
    }
  }

  printResult() {
    let resultMessage = '';

    if (this.#ballCnt) {
      resultMessage = `${this.#ballCnt}볼 `;
    }

    if (this.#strikeCnt) {
      resultMessage += `${this.#strikeCnt}스트라이크`;
    }

    if (this.#ballCnt === 0 && this.#strikeCnt === 0) {
      resultMessage = '낫싱';
    }

    MissionUtils.Console.print(resultMessage);

    if (this.#strikeCnt == 3) {
      const GAME_OVER_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
      MissionUtils.Console.print(GAME_OVER_MESSAGE);
    }
  }

  confirmRestart() {
    const CONSOLE_MESSAGE =
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    const [RESTART, EXIT] = [1, 2];
    let choice = 0;
    //const EXIT = 2;
    MissionUtils.Console.readLine(CONSOLE_MESSAGE, (number) => {
      if (Number(number) === RESTART) {
        choice = RESTART;
      } else if (Number(number) === EXIT) {
        choice = EXIT;
      } else {
        const INVALID_INPUT_NUMBER = '[ERROR] 올바른 숫자만 입력해주세요.';
        MissionUtils.Console.print(INVALID_INPUT_NUMBER);
        throw new Error(INVALID_INPUT_NUMBER);
      }
    });
    return choice;
  }
}

export default BaseballGame;
