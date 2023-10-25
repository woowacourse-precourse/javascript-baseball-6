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
        if (+inputValue[i] == NaN)
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

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
  }
}

const app = new App();
app.play();

export default App;