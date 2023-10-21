import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.replay = false;
    this.reanswer = false;
    this.randomNum = [];
  }
  // 서로 다른 숫자 3자리 랜덤 생성하기
  makeRandomNum() {
    const random_num = [];
    while (random_num.length < 3) {
      if (random_num.length == 0) {
        random_num.push(MissionUtils.Random.pickNumberInRange(1, 9));
      } else {
        const num = MissionUtils.Random.pickNumberInRange(1, 9);
        if (random_num.indexOf(num) < 0) {
          random_num.push(num);
        }
      }
    }
    console.log(random_num);
    return random_num;
  }
  // result 스트링 만들어내는 함수
  judgeNum(strike, ball) {
    let result = "";
    if (strike == 0 && ball == 0) {
      result = "낫싱";
    }
    if (ball != 0) {
      result = `${ball}볼 `;
    }
    if (strike != 0) {
      result += `${strike}스트라이크`;
    }
    if (strike == 3) {
      this.reanswer = true;
    }
    return result;
  }
  //사용자의 입력 값 받고 판단하는 함수
  async getUserAnswer() {
    let user_num = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (this.randomNum[i] == Number(user_num[i])) {
        strike += 1;
      } else if (this.randomNum.includes(Number(user_num[i]))) {
        ball += 1;
      }
    }
    const judge_user_answer = this.judgeNum(strike, ball);
    MissionUtils.Console.print(judge_user_answer);
    // MissionUtils.Console.print(judgeNum(strike, ball));
  }
  // 입력 다시 받을지 끝낼지 결정하는 함수
  async againOrFinish() {
    if (this.reanswer == false) {
      this.getUserAnswer().then(() => {
        this.againOrFinish();
      });
    } else if (this.reanswer == true) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      ).then((result) => {
        if (result == 1) {
          this.replay = true;
        } else if (result == 2) {
          this.replay = false;
        }
      });
    }
  }
  async play() {
    // 게임 시작 문구 출력하기
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNum = this.makeRandomNum();
    await this.getUserAnswer();
    await this.againOrFinish().then(() => {
      if (this.replay == true) {
        this.play();
      }
    });
  }
}

export default App;
