import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.readLine("닉네임을 입력해주세요.", (answer) => {
      console.log(`닉네임: ${answer}`);
    });
    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(computer);
  }
}

const app = new App();
app.play();

export default App;
