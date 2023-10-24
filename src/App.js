import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.correctAnswer = null;
  }

  /**
   * 숫자 야구 게임의 도입부. `index.js` 에서 호출된다.
   * @async
   * @returns {await}
   */
  async play() {
    // 1. init message
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.gameStart();
  }

  async gameStart() {
    // 2. 랜덤한 정답 생성
    this.correctAnswer = this.generateCorrectNumber();
    await this.playGameCycle();
  }

  /**
   * 길이가 3이고 중복되지 않는 난수 배열(= 정답 배열)을 생성하는 함수.
   * @returns {Array} - 3개의 서로 다른 숫자로 이루어진 배열을 반환
   */
  generateCorrectNumber() {
    const correctAnswer = [];
    while (correctAnswer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!correctAnswer.includes(number)) {
        correctAnswer.push(number);
      }
    }
    return correctAnswer;
  }

  /**
   * 숫자 야구 게임의 한 사이클을 수행하는 함수.
   * @async
   * @returns {Promise<void>} - 사용자 입력값에 따라 해결되는 Promise. 반환값 없음.
   */
  async playGameCycle() {
    // 3. 사용자 입력 받기
    const userAnswer = await Console.readLineAsync('숫자를 입력해주세요 : ');

    // 4. 입력값 형식 검증 및 5. 정답 검증
    const validatedUserAnswer = this.validateInputNumber(userAnswer);
    const roundResult = this.compareWithUserAnswer(this.correctAnswer, validatedUserAnswer);
    this.showRoundResultMessage(roundResult);

    // 게임 종료 조건 확인
    roundResult.isFlag ? await this.chooseContinueOrQuit() : await this.playGameCycle();
  }

  /**
   * 사용자 입력 문자열에 대한 유효성 검증.
   * @param {string} userAnswer - 사용자 입력 값
   * @returns {Array} - 유효한 입력인 경우 배열을 반환
   * @throws {Error} - 유효하지 않은 입력인 경우 에러를 던져 프로그램을 종료
   */
  validateInputNumber(userAnswer) {
    const threeDigitNumRegex = /^[1-9]{3}$/;
    const userAnswerArray = userAnswer.split('').map((num) => parseInt(num));
    const isDuplicate = new Set(userAnswerArray).size !== userAnswerArray.length;

    if (!threeDigitNumRegex.test(userAnswer) || isDuplicate) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return userAnswerArray;
  }

  /**
   * 정답과 사용자 입력값을 비교하여 스트라이크(strikes)와 볼(balls)을 계산하는 함수.
   * @param {Array} correctAnswer - length가 3인 중복 없는 정답 숫자 배열
   * @param {Array} userAnswer - 사용자의 3자리 숫자 배열
   * @returns {{ strikes: number; balls: number; isFlag: boolean; }} - 스트라이크, 볼, 정답 여부를 담은 객체를 반환
   */
  compareWithUserAnswer(correctAnswer, userAnswer) {
    let strikes = 0;
    let balls = 0;
    let isFlag = false;

    for (let i = 0; i < correctAnswer.length; i++) {
      if (correctAnswer[i] === userAnswer[i]) strikes++;
      else if (userAnswer.includes(correctAnswer[i])) balls++;
    }

    if (strikes === 3 && balls === 0) isFlag = true;

    return { strikes, balls, isFlag };
  }

  /**
   * compareWithUserAnswer() 함수의 실행 결과에 따른 게임 결과 메시지 출력 함수.
   * @param {Object} status - 게임 결과 정보를 담은 객체
   * @param {Number} status.strikes - 현재 라운드의 스트라이크 수
   * @param {Number} status.balls - 현재 라운드의 볼 수
   * @param {Boolean} status.isFlag - 정답 여부
   */
  showRoundResultMessage(status) {
    // 6. 결과 메시지를 출력
    const { strikes, balls } = status;
    let resultMessage = '';

    if (balls > 0) resultMessage = `${balls}볼`;
    if (strikes > 0) resultMessage += (resultMessage ? ' ' : '') + `${strikes}스트라이크`;
    resultMessage = resultMessage || '낫싱';

    Console.print(resultMessage);
  }

  /**
   * 게임 종료 메시지를 출력하고 사용자에게 게임 종료 또는 재시작 여부를 물어봄.
   * @async
   * @returns {Promise<String>} 사용자 입력값에 따라 해결되는 Promise. '1' (재시작) 또는 '2' (종료)를 반환함.
   * @throws {Error} 올바르지 않은 선택이 입력된 경우 에러를 던짐.
   */
  async chooseContinueOrQuit() {
    // 7. 게임 종료 메시지와 함께 재시작 여부를 물음.
    Console.print('3개의 숫자를 모두 맞히셨습니다!');
    const isReplay = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

    switch (isReplay) {
      case '1': {
        await this.gameStart();
        break;
      }
      case '2': {
        // 7. 종료
        Console.print('게임 종료');
        break;
      }
      default: {
        throw new Error('[ERROR] 올바른 선택을 입력하세요. 1 또는 2를 입력해주세요.');
      }
    }
  }
}

export default App;
