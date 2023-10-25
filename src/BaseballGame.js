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

  getUserNumbers() {
    const CONSOLE_MESSAGE = '숫자를 입력해주세요 : ';
    MissionUtils.Console.readLine(CONSOLE_MESSAGE, (numbers) => {
      this.#userNumbers = [...numbers].map((number) => Number(number));
    });
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
        new Error(ERROR_MESSAGES.INVALID_INPUT_NUMBER);
      } else if (number <= 0 || 9 < number) {
        MissionUtils.Console.print(ERROR_MESSAGES.OUT_OF_RANGE);
        throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
      }
    });

    // 숫자 중복 여부 확인
    const isUnique = new Set(this.#userNumbers).size;
    if (isUnique) {
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
    let consoleMessage = '';

    if (this.#ballCnt) {
      consoleMessage = `${this.#ballCnt}볼 `;
    } else if (this.#strikeCnt) {
      consoleMessage += `${this.#strikeCnt}스트라이크 `;
    } else {
      consoleMessage = '낫싱';
    }

    MissionUtils.Console.print(consoleMessage);

    if (this.#strikeCnt == 3) {
      const CONSOLE_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
      MissionUtils.Console.print(CONSOLE_MESSAGE);
    }
  }
}

export default BaseballGame;
