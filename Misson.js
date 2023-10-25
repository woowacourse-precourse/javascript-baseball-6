import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 컴퓨터의 답변을 저장하는 함수
  async createComputerAnswerArray() {
    const computerAnswerArray = [];
    while (computerAnswerArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerAnswerArray.includes(number)) {
        computerAnswerArray.push(number);
      }
    }
    this.expectedAnswer = computerAnswerArray;
    return ;
  }

  // 유저의 입력을 받아 배열로 저장하는 함수
  async createUserAnswerArray() {
    try {
      const userAnswerArray = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      this.userAnswer = [...userAnswerArray].map((element) => parseInt(element));
      // 유저 입력 검증: 3자리 숫자가 아닌 경우 오류
      if (this.userAnswer.length !== 3) {
        throw new Error(`[ERROR] 유저 입력 길이 오류`);
      }
      // 유저 입력 검증: 1~9 범위를 벗어난 경우 오류
      this.userAnswer.forEach((element) => {
        if (element < 1 || element > 9)
          throw new Error("[ERROR] 유저 입력 범위 초과");
      });
      // 유저 입력 검증: 중복된 숫자가 있는 경우 오류
      if (this.userAnswer[0] === this.userAnswer[1] || this.userAnswer[0] === this.userAnswer[2]
        || this.userAnswer[1] === this.userAnswer[2]) {
        throw new Error("[ERROR] 유저 입력 중복");
      }
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
    return ;
  }

  // 스트라이크와 볼의 개수를 반환하는 함수
  async getStrikeAndBall(expectedAnswer, userAnswer) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (expectedAnswer[i] === userAnswer[i]) {
        strike++;
      } else if (expectedAnswer.includes(userAnswer[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }

  // 게임이 끝났을때 호출해서 게임을 재시작할지 종료할지 결정하는 함수
  async isEnd() {
    try {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      const restart = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
      this.userAnswer = restart;
      if (this.userAnswer == '1') {
        await this.play();
      } else if (this.userAnswer == '2') {
        return ;
      } else {
        throw new Error("[ERROR] 잘못된 입력");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // 볼 스트라이크 결과를 출력하는 함수
  async printResult(strike, ball) {
    if (strike === 0 && ball === 0)
      MissionUtils.Console.print('낫싱');
    else if (strike === 0)
      MissionUtils.Console.print(`${ball}볼`);
    else if (ball === 0)
      MissionUtils.Console.print(`${strike}스트라이크`);
    else
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크 `);
  }

  // 게임을 실행하는 함수: 엔트리포인트
  async play() {
    let endFlag = false;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    await this.createComputerAnswerArray();
    while (endFlag == false) {
      await this.createUserAnswerArray();
      const result = await this.getStrikeAndBall(this.expectedAnswer, this.userAnswer);
      if (result.strike === 3) {
        await this.printResult(result.strike, result.ball);
        await this.isEnd();
        endFlag = true;
      }
      if (endFlag === false) {
        await this.printResult(result.strike, result.ball);
      }
    }
  }
}

const app = new App();
app.play();

export default App;