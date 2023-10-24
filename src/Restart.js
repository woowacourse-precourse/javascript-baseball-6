import { Console } from "@woowacourse/mission-utils";

class Restart {
  async restart() {
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    let input = await Console.readLineAsync("");
    if (String(input) === "1") return true;
    else if (String(input) === "2") return false;
    else throw new Error("[ERROR] 1 혹은 2가 아닌 값을 입력하였습니다");
  }
}
export default Restart;
