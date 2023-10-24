import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "./validation.js";

class App {
  constructor() {
    this.replay = false;
    this.isCorret = false;
    this.randomNum = [];
  }

  // 서로 다른 숫자 3자리 랜덤 생성 함수
  makeRandomNum() {
    const randomNumList = [];
    while (randomNumList.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomNumList.indexOf(num) < 0) {
        randomNumList.push(num);
      }
    }

    return randomNumList;
  }
  
  async play() {
    if (!this.replay) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }

    this.randomNum = this.makeRandomNum();
    await this.getUserAnswer();
    await this.againOrFinish();
  }

  // 사용자 입력 값 받기
  async getUserAnswer() {
    let userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    this.countUserAnswer(userNum);
  }

  // 사용사 입력 값으로 strike, ball 갯수 세는 함수
  countUserAnswer(userNum) {
    let strike = 0;
    let ball = 0;
    Validation.userNum(userNum);
    for (let i = 0; i < 3; i++) {
      if (this.randomNum[i] === Number(userNum[i])) {
        strike += 1;
      } else if (this.randomNum.includes(Number(userNum[i]))) {
        ball += 1;
      }
    }

    this.judgeNum(strike, ball);
  }

  // strike, ball 갯수 판단해 출력하는 함수
  judgeNum(strike, ball) {
    let result = '';
    if (strike === 0 && ball === 0) {
      result = '낫싱';
    }
    if (ball !== 0) {
      result = `${ball}볼 `;
    }
    if (strike !== 0) {
      result += `${strike}스트라이크`;
    }
    if (strike === 3) {
      this.isCorret = true;
    }

    MissionUtils.Console.print(result);
  }

  // 입력 다시 받을지 끝낼지 결정하는 함수
  async againOrFinish() {
    if (!this.isCorret) {
      await this.getUserAnswer();
      this.againOrFinish();
    } else if (this.isCorret) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.restart();
    }
  }

  // 재시작, 종료 결정 함수
  async restart() {
    const finalAnswer = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    Validation.replayAnswer(finalAnswer);
    if (finalAnswer === '1') {
      this.replay = true;
      this.isCorret = false;
      this.play();
    }

    if (finalAnswer === '2') {
      MissionUtils.Console.print('게임 종료');
    }
  }
}

export default App;