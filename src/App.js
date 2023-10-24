import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.correctAnswer = null;
  }

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

  validateInputNumber(userAnswer) {
    const threeDigitNumRegex = /^[1-9]{3}$/;
    const userAnswerArray = userAnswer.split('').map((num) => parseInt(num));
    const isDuplicate = new Set(userAnswerArray).size !== userAnswerArray.length;

    if (!threeDigitNumRegex.test(userAnswer) || isDuplicate) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return userAnswerArray;
  }

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

  showRoundResultMessage(status) {
    // 6. 결과 메시지를 출력
    const { strikes, balls } = status;
    let resultMessage = '';

    if (balls > 0) resultMessage = `${balls}볼`;
    if (strikes > 0) resultMessage += (resultMessage ? ' ' : '') + `${strikes}스트라이크`;
    resultMessage = resultMessage || '낫싱';

    Console.print(resultMessage);
  }

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
