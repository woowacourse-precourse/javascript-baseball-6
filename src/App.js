import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answerNumber = '';
    this.playerInput = '';
  }
  // error 핸들링 메서드
  handleError(name, message) {
    let error = new Error();
    error.name = name;
    error.message = message;
    Console.print(error.message);
    throw error;
  }
  // 랜덤 숫자 생성 메서드
  setAnswerNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.answerNumber = numbers.join('');
  }
  // 입력값이 검증 메서드
  validateInput(input) {
    const isDuplicate = input.split('').some((number) => input.indexOf(number) !== input.lastIndexOf(number))

    if(isNaN(Number(input))) {
      this.handleError('Validation Error', '[ERROR] 숫자를 입력해주세요');
    } else if(input.length !== 3) {
      this.handleError('Validation Error', '[ERROR] 3자리 숫자를 입력해주세요');
    } else if(isDuplicate) {
      this.handleError('Validation Error', '[ERROR] 중복되지 않는 숫자를 입력해주세요');
    } else {
      this.playerInput = input;
    }
  } 
  // 볼, 스트라이크 판단 메서드
  calculateBallsAndStrikes() {
    const player = this.playerInput.split('');
    let strike = 0;
    let ball = 0;
    player.forEach((number, index) => {
      if (this.answerNumber.includes(number)) {
        if (this.answerNumber[index] === player[index]) {
          strike++;
        } else {
          ball++;
        }
      }});
    return { ball, strike };
  }
  // 힌트 출력 메서드
  printHintText(ball, strike) {
    const ballCount = ball > 0 ? ball + '볼 ' : '';
    const strikeCount = strike > 0 ? strike + '스트라이크' : '';
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else {
      Console.print(`${ballCount}${strikeCount}`);
    }
  }
  // 게임 종료 후 재시작 여부 확인
  async askReplay() {
    const replay = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (replay === "1") {
      Console.print(replay);
      this.play();
    } else if (replay === "2") {
      Console.print(replay);
      Console.print('게임을 종료합니다.');
    } else {
      this.handleError('Error', '[ERROR] 1 또는 2를 입력해주세요');
    }
  }
  // 게임 진행 메서드
  async playTheGame() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.validateInput(input);

    const { ball, strike } = this.calculateBallsAndStrikes();
    this.printHintText(ball, strike);

    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.askReplay();
    } else {
      this.playTheGame();
    }
  }
  async play() {
    this.answerNumber = '';
    this.playerInput = '';
    this.setAnswerNumber();
    Console.print('숫자 야구 게임을 시작합니다.');

    await this.playTheGame();
  }
}

export default App;
