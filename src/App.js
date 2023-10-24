import { MissionUtils, Console } from "@woowacourse/mission-utils";

async function getUsernumber() {
  try {
    const usernumber = await Console.readLineAsync("숫자를 입력해주세요.");
    return usernumber;
  } catch (error) {}
}

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const usernumber = await getUsernumber();
  }
}

const app = new App();
app.play();

export default App;
