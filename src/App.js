import { MissionUtils } from '@woowacourse/mission-utils';

export const ConsoleText = {
  START_GAME: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  THREE_STRIKE_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  USER_CHOICE_QUESTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  GAME_END: '게임 종료',
};

export const InputErrorMessage = {
  THREE_DIGIT: '[ERROR]: 3자리를 입력해야 합니다.',
  DUPLICATION: '[ERROR]: 중복된 숫자가 있습니다.',
  ENTER_1_9: '[ERROR]: 1~9사이의 숫자만 입력해야 합니다.',
};

export const NUMBER_REGEX_3_DIGITS = /^\d{3}$/; // 3자리인지 확인
export const NUMBER_REGEX = /[1-9]$/; // 숫자인지 확인

class App {
  constructor() {
    this.computer = [];
    this.gameStatus = 1; // 0: 종료, 1: 실행
  }
  async play() {
    try {
      MissionUtils.Console.print(ConsoleText.START_GAME);

      // 게임 시작 시 컴퓨터의 숫자 설정
      this.#setComputerNumber();

      while (this.gameStatus === 1) {
        const input = await MissionUtils.Console.readLineAsync(ConsoleText.INPUT_NUMBER);
        this.#validateInputValue(Number(input));

        const hint = this.#printHint(this.#compareNumberResult(input));
        MissionUtils.Console.print(hint);

        if (this.gameStatus === 0) {
          MissionUtils.Console.print(ConsoleText.THREE_STRIKE_ANSWER);
          MissionUtils.Console.print(ConsoleText.USER_CHOICE_QUESTION);

          const userChoice = await MissionUtils.Console.readLineAsync('');

          // 재시작이면
          if (userChoice === '1') {
            this.#setComputerNumber();
            this.gameStatus = 1;
          }
        }
      }
    } catch (error) {
      throw error;
    }
  }

  // 상대방 랜덤 숫자 처리
  #setComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    this.computer = computer;
  }

  // 입력조건 유효성 검사
  #validateInputValue(input) {
    const digits = input.toString().split('');
    if (!NUMBER_REGEX_3_DIGITS.test(input)) {
      throw new Error(InputErrorMessage.THREE_DIGIT);
    }

    if (!NUMBER_REGEX.test(input)) {
      throw new Error(InputErrorMessage.ENTER_1_9);
    }
    if (digits[0] === digits[1] || digits[0] === digits[2] || digits[1] === digits[2]) {
      throw new Error(InputErrorMessage.DUPLICATION);
    }
  }

  // 상대방 숫자와 입력받은 숫자 체크
  #compareNumberResult(input) {
    let strike = 0;
    let ball = 0;

    this.computer.forEach((item, index) => {
      if (input.includes(item)) {
        if (input.indexOf(item) === index) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    });

    return { ball, strike };
  }

  // 힌트 출력
  #printHint({ ball, strike }) {
    if (ball === 0 && strike === 0) {
      return '낫싱';
    }

    let result = '';
    if (ball > 0) {
      result = `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }
    if (strike === 3) {
      this.gameStatus = 0;
    }
    return result;
  }
}

export default App;
