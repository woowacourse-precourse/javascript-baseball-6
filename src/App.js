import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  computer() {
    const answer = [];

    while (answer.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNumber))
        answer.push(randomNumber);
    }
    console.log(answer)
    return answer;
  }

  async user() {
    const userInputNumber = [];
    
    try {
      const inputValue = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      if (inputValue == undefined || inputValue.length != 3)
        throw new Error("[ERROR] 숫자가 3자리여야 합니다.");
      
      for (var i = 0; i < 3; i++) {
        if (Number.isNaN(Number(inputValue[i])))
          throw new Error("[ERROR] 입력값은 숫자여야 합니다.");
        if (userInputNumber.includes(parseInt(inputValue[i])))
          throw new Error("[ERROR] 숫자가 중복되지 않아야 합니다.");
        if (inputValue[i] == 0)
          throw new Error("[ERROR] 숫자는 1~9 사이의 숫자여야 합니다.");
        else
          userInputNumber.push(parseInt(inputValue[i]));
      }

      return userInputNumber;

    } catch (error) {
      return Promise.reject(error);
    }
  }

  compare(answer, userInputNumber) {
    let strike = 0;
    let ball = 0;

    for (var i = 0; i < 3; i++) {
      if (answer[i] == userInputNumber[i]) {
        strike++;
      } else if (answer.includes(userInputNumber[i]))
        ball++;
    }
    return [strike, ball];
  }

  async play() {
    let start = 1;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  
    try {
      while (start == 1) {
        const answer = this.computer();
        let strike = 0;
        let ball = 0;

        while (strike != 3) {
          const userInputNumber = await this.user();

          [strike, ball] = this.compare(answer, userInputNumber);

          if (strike > 0) {
            if (ball > 0)
              MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
            else
              MissionUtils.Console.print(`${strike}스트라이크`);
          } else {
            if (ball > 0)
              MissionUtils.Console.print(`${ball}볼`);
            else // strike == ball == 0 일 때
              MissionUtils.Console.print("낫싱");
          }
        }

        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        
        start = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if (start != 1 && start != 2)
          throw new Error("[ERROR] 입력이 잘못되었습니다. 게임을 종료합니다.");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

const app = new App();
app.play();

export default App;