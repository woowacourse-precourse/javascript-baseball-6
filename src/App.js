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

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
  }
}

const app = new App();
app.play();

export default App;