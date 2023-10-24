import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("숫자 야구 시작");
    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
  }
}

export default App;
console.log("test");
