import {MissionUtils} from "@woowacourse/mission-utils"
import {startGame} from "./game/init.js";

class App {
    async play() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        await startGame();
    }
}

export default App;
