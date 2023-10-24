import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answer = [];
    this.isPlaying = true;
  }

  generateAnswer() {
    this.answer = [];
    for (let i = 0; i < 3; i++) {
      const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(NUM)) {
        this.answer.push(NUM);
      } else {
        i--;
      }
    }
  }

  async askRestart() {
    let answer;

    while (true) {
      const RESTART_GAME = '1';
      const END_GAME = '2';
      answer = await MissionUtils.Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
      );

      if (answer === RESTART_GAME) return true;
      else if (answer === END_GAME) return false;
      else {
        MissionUtils.Console.print('[ERROR] 올바른 값을 입력해주세요.');
        answer = undefined;
      }
    }
  }

  async play() {
    this.generateAnswer();

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      try {
        const INPUT = await MissionUtils.Console.readLineAsync(
          '세 자리 숫자를 입력하세요: '
        );

        if (!this.isValidInput(INPUT)) {
          throw new Error(' [ERROR] 숫자가 잘못된 형식입니다.');
        }

        const GUESS_NUMBERS = INPUT.split('');

        const RESULT = this.checkGuess(GUESS_NUMBERS);

        if (RESULT.strike === 3) {
          MissionUtils.Console.print('3스트라이크');
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다!');

          if (await this.askRestart()) {
            this.generateAnswer();
          } else {
            MissionUtils.Console.print('게임 종료');
            return false;
          }
        }

        let outputMessage = '';

        if (RESULT.ball > 0) outputMessage += `${RESULT.ball}볼 `;
        if (RESULT.strike > 0) outputMessage += `${RESULT.strike}스트라이크 `;
        if (!outputMessage) outputMessage = '낫싱';

        MissionUtils.Console.print(outputMessage.trim());
      } catch (error) {
        MissionUtils.Console.print(error.message);
        throw error;
      }
    }
  }

  isValidInput(INPUT) {
    // 게임 재시작 또는 종료를 위한 입력값 처리
    // if (INPUT === '1' || INPUT === '2') return true;
    // 입력값 검증 로직 구현 필요
    // 예: 길이는 3자리여야 하며, 각 자리수는 모두 다른 숫자여야 한다.
    if (!INPUT || INPUT.length !== 3) return false;

    if (new Set(INPUT).size !== INPUT.length) return false;

    return true;
  }

  checkGuess(GUESS_NUMBERS) {
    let strikeCount = 0;
    let ballCount = 0;

    GUESS_NUMBERS.forEach((numStr, idx) => {
      // numStr: string
      const ANSWER_IDX = this.answer.indexOf(Number(numStr)); // Convert string to number before comparison

      if (ANSWER_IDX !== -1) {
        ANSWER_IDX === idx ? strikeCount++ : ballCount++;
      }
    });

    return { strike: strikeCount, ball: ballCount };
  }
}

(async () => {
  const APP = new App();
  await APP.play();
})();

export default App;
