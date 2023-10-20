import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

function getUserNumber() {
  console.log(
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      console.log(`입력한 숫자 : ${input}`);
    })
  );
}

export default App;

console.log(MissionUtils.Console.print("숫자 야구 게임을 시작합니다."));
getUserNumber();
