import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";

const computer = new Computer();

class App {
	async play() {
		MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
		await computer.guessNum();
	}
}

export default App;
