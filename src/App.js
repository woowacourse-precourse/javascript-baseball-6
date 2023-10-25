import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  //FLAG = True;
  constructor() {
    this.FLAG = true;
    this.comNumbers = [];
  }

  getComNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  calculateResult(userNumbers) {
    let strikeCnt = 0;
    let ballCnt = 0;

    //comNumbers = [1, 3, 5];
    // MissionUtils.Console.print("comNumbers");
    // MissionUtils.Console.print(this.comNumbers);

    /* 
    스트라이크 후보군을 뽑습니다
    사용자 숫자 리스트와 컴퓨터 숫자 리스트의 교집합이 존재하면 이는 "스트라이크" 또는 "볼"이 될 수 있고
    각 배열의 교집합의 원소의 인덱스가 같으면 "스트라이크", 다르면 "볼"로 판단할 수 있습니다  
    */
    let intersection = userNumbers.filter((num) =>
      this.comNumbers.includes(num)
    );

    if (Array.isArray(intersection) && intersection.length === 0) {
      return "낫싱";
    } else {
      for (const num of intersection) {
        let comIdx = this.comNumbers.indexOf(num);
        let userIdx = userNumbers.indexOf(num);
        if (comIdx === userIdx) {
          strikeCnt++;
        } else {
          ballCnt++;
        }
      }
      return { strikeCnt, ballCnt };
    }
  }

  validationInput(userNumbers) {
    // MissionUtils.Console.print("userNumbers");
    // MissionUtils.Console.print(userNumbers);
    if (
      userNumbers.includes(NaN) ||
      userNumbers.includes(0) ||
      userNumbers.length !== 3 ||
      [...new Set(userNumbers)].length !== 3
    ) {
      throw new Error("[ERROR] 사용자 입력의 숫자가 잘못된 형식입니다");
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.comNumbers = [...this.getComNumbers()];

    // this.FLAG = False 때까지 게임 지속 (종료조건은 strike 3개 && 2 입력)
    while (this.FLAG) {
      let userNumberstr = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      let userNumbers = [...userNumberstr].map(Number);

      // 사용자 입력 유효성 검증
      this.validationInput(userNumbers);

      let res = this.calculateResult(userNumbers);
      if (typeof res == "string") {
        MissionUtils.Console.print("낫싱");
      } else {
        let answer = "";
        if (res?.ballCnt > 0) {
          answer += `${res?.ballCnt}볼 `;
        }
        if (res?.strikeCnt > 0) {
          answer += `${res?.strikeCnt}스트라이크`;
        }
        MissionUtils.Console.print(answer);
        if (res?.strikeCnt === 3) {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );

          let flagstr = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
          );
          if (flagstr === "1") {
            this.FLAG = true;
            this.comNumbers = [...this.getComNumbers()];
          } else if (flagstr === "2") {
            this.FLAG = false;
          } else {
            throw new Error(
              "[ERROR] 새로 시작하려면 1, 종료하려면 2를 입력하세요"
            );
          }
        }
      }
    }
    MissionUtils.Console.print("게임 종료!");
  }
}

export default App;

// const app = new App();
// app.play();
