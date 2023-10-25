import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGES } from './Constant.js';
import { Numbers } from './Numbers.js';


class App {
  constructor() {
    this.answer = new Numbers();
    this.isFinished = false;
    MissionUtils.Console.print(MESSAGES.GAME_START);
  }

  // 게임 시작
  async play() {
    this.isFinished = false;
    while (this.isFinished == false) {
      await this.roundInput().then(this.inputCheck);
    }
    await this.endOrReplay();
  }

  // 라운드 입력
  async roundInput() {
    const guessNumbers = await MissionUtils.Console.readLineAsync(MESSAGES.ASK_GUESS);
    if (!/^[1-9]{3}$/.test(guessNumbers) || new Set(guessNumbers.split('')).size !== 3) {
      throw Error(MissionUtils.Console.print(MESSAGES.ERROR_GUESS));
    } else {
      return guessNumbers;
    }
  }

  // 결과 체크
  inputCheck(input) {
    const guess = new Numbers(input.split('').map(Number)); // 인풋으로 넘버스 클래스 생성
    const scoreArray = app.answer.count(guess); // 비교 채점
    app.answer.result(scoreArray);
    if (scoreArray[0] === 3) {
      app.isFinished = true;
    }
  }

  // 위아래 두 메서드에서 app.answer 말고 다른걸 쓸순 없는것인지,
  // 저게 구린 코드가 맞긴 한건지

  // 종료 또는 재시작
  async endOrReplay() {
    MissionUtils.Console.print(MESSAGES.GAME_END);
    const restart = await MissionUtils.Console.readLineAsync(MESSAGES.ASK_RESTART);
    if (restart == 1) {
      app.answer.numbersArray = app.answer.generateAnswer();
      this.play();
    } else if (restart == 2) {
      console.log("종료");
    } else {
      throw Error(MissionUtils.Console.print(MESSAGES.ERROR_REPLAY));
    }
  }
}


export default App;
