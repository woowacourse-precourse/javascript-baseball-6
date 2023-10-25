import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  randomNumberGenerator() {
    const randomNumbers = [];
    while(randomNumbers.length <3) {
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }

  async answerCheck(randomNum) {
    let returnValue = "";
    let strike = 0;
    let ball = 0;
    let userAnswer = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

    if(userAnswer.length !== 3) {
      throw new Error("[ERROR] 3개의 숫자를 입력해주세요.");
    }
    if(new Set(userAnswer).size !== 3) {
      throw new Error("[ERROR] 중복되지 않은 3개의 숫자를 입력해주세요.");
    }
    if(!parseInt(userAnswer)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    for(let i = 0; i < randomNum.length; i++) {
      const index = userAnswer.indexOf(randomNum[i]);
        if(index>-1) {
          if (index === i) strike += 1;
          else ball += 1;
        }
    }
    if (!(ball+strike)) returnValue = "낫싱";
    else if (ball && strike) returnValue = `${ball}볼 ${strike}스트라이크`;
    else if (!ball && strike) returnValue = `${strike}스트라이크`;
    else if (ball && !strike) returnValue = `${ball}볼`;

    return returnValue;
  }

  async start() {
    while (true) {
      const answer = this.randomNumberGenerator();
      let message = "";
      while (message !== "3스트라이크") {
        message = await this.answerCheck(answer);
        await MissionUtils.Console.print(message);
      }
      await MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const reGame = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      if (reGame == 1) {
        continue;
      }
      else if (reGame == 2) {
        await MissionUtils.Console.print("게임 종료");
        break;
      } else {
        throw new Error("[ERROR] 1 또는 2의 값을 입력해주세요");
      }
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.start();
  }
}

export default App;