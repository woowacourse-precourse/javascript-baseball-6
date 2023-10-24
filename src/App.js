/* 구현 순서
 * 1. 숫자 야구 게임 시작문 출력
 * 2. 컴퓨터가 랜덤한 3자리 숫자 생성
 * 3. 사용자의 숫자 입력받기
 * 4. 사용자 입력과 컴퓨터가 생성한 숫자 비교
 * 5. 3개의 숫자 모두 맞추면 게임 종료
 * 6. 1을 입력했으면 처음부터 다시 시작, 2를 입력했으면 프로그램 종료
 * 7. 예외처리
 */
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 1. 숫자 야구 게임 시작문 출력
  printStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  // 2. 컴퓨터가 랜덤한 3자리 숫자 생성
  makeRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  // 4-1. 스트라이크 체크
  checkStrike(computer, answer) {
    var strike = 0;
    for (var i = 0; i < 3; i++) {
      if (computer[i] == answer[i]) {
        strike++;
      }
    }
    return strike;
  }
  // 4-2. 볼 체크
  checkBall(computer, answer) {
    var ball = 0;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        // 다른 자리 비교
        if (i != j && computer[i] == answer[j]) {
          ball++;
        }
      }
    }
    return ball;
  }
  isContinue = 0; // 게임 다시 시작 또는 종료 여부를 결정하는 변수
  // answer에 중복된 숫자가 있는지 확인
  isDup(answer) {
    if (answer[0] !== answer[1] && answer[0] !== answer[2]) {
      if (answer[1] !== answer[0] && answer[1] !== answer[2]) {
        if (answer[2] !== answer[0] && answer[2] !== answer[1]) {
          return 0;
        }
      }
    }
    return 1;
  }

  async play() {
    // 1. 숫자 야구 게임 시작문 출력
    this.printStart();
    outer: while (this.isContinue != 2) {
      // 2. 컴퓨터가 랜덤한 3자리 숫자 생성
      const computer = this.makeRandomNum();

      // 사용자 입력 반복
      let answer = "000";
      inner: do {
        // 3. 사용자의 숫자 입력받기
        answer = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );

        // 7-1. 사용자 숫자 입력 예외처리
        // 중복된 숫자 안되고, 1자리/2자리/4자리이상 숫자 입력 안되고, 빈 입력도 안됨
        const numCheck = /\d{3}/; // 추가 -숫자가 아닌 문자 입력 막기
        if (answer.length < 3 || answer.length > 3) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        } else if (this.isDup(answer)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        } else if (!numCheck.test(answer)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        } else if (answer.includes("0")) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        // 4. 사용자 입력과 컴퓨터가 생성한 숫자 비교
        if (
          this.checkStrike(computer, answer) === 0 &&
          this.checkBall(computer, answer) === 0
        ) {
          MissionUtils.Console.print("낫싱");
        } else if (this.checkStrike(computer, answer) === 0) {
          MissionUtils.Console.print(`${this.checkBall(computer, answer)}볼`);
        } else if (this.checkBall(computer, answer) === 0) {
          MissionUtils.Console.print(
            `${this.checkStrike(computer, answer)}스트라이크`
          );
        } else if (
          this.checkStrike(computer, answer) !== 0 &&
          this.checkBall(computer, answer) !== 0
        ) {
          MissionUtils.Console.print(
            `${this.checkBall(computer, answer)}볼 ${this.checkStrike(
              computer,
              answer
            )}스트라이크`
          );
        }
      } while (this.checkStrike(computer, answer) != 3);

      // 5. 3개의 숫자 모두 맞추면 게임 종료
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.isContinue = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      // 7-2. 사용자의 게임 새로 시작/종료 입력 처리
      if (this.isContinue < 1 || this.isContinue > 2) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      // 6. 1을 입력했으면 처음부터 다시 시작, 2를 입력했으면 프로그램 종료
    }
  }
}

// 게임 실행
const game = new App();
game.play();

export default App;
