const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = [];
    this.firstStep = true;
    this.strike = 0;
    this.ball = 0;
  }

  //게임 플레이 클래스
  async play() {
    //시작 콘솔
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.answer = await this.createRandomNumber();

    //유저의 숫자 입력
    while (this.firstStep) {
      const userHit = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 :"
      );
      this.checkUserHit(userHit); // 입력된 유저 숫자 에러 확인
      this.computerVsUser(this.answer, userHit); // 유저 숫자와 컴퓨터의 랜덤 숫자 비교하여 strike와 ball 카운트

      MissionUtils.Console.print(await this.check(this.strike, this.ball)); // 카운트된 strike와 ball 결과값 출력하기

      // 3스트라이크인 경우, 게임 재시작 여부 확인.
      if (this.strike === 3) {
        const restartOrEnd = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        if (restartOrEnd === "1") {
          this.answer = await this.createRandomNumber();
          this.strike = 0;
          this.ball = 0;
          continue;
        } else if (restartOrEnd === "2") {
          MissionUtils.Console.print("게임을 종료합니다.");
          break;
        }
      }
    }
  }

  // userHit 에러 체크
  checkUserHit(userHit) {
    if (userHit.length !== 3) {
      throw Error("[ERROR] 중복되지 않는 세자리 수를 입력하세요");
    }
  }

  // 랜덤 숫자 생성하기
  async createRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = await MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber;
  }

  //랜덤 숫자와 입력 숫자 비교하기
  computerVsUser(answer, userHit) {
    if (answer.join("") === userHit) {
      this.strike = 3;
    } else {
      answer.forEach((answerCount, index) => {
        if (answerCount === Number(userHit[index])) {
          this.strike += 1;
        } else {
          [...userHit].forEach((userCount) => {
            if (answerCount === Number(userCount)) {
              this.ball += 1;
            }
          });
        }
      });
    }
  }

  //strike와 ball 카운트 결과 콘솔하기
  async check(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print(
        `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    }
    if (strike > 0 && strike < 3 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike > 0 && strike < 3 && ball > 0 && ball < 2) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball > 0 && ball < 4 && strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
    }
  }
}

const app = new App();
app.play();

export default App;
