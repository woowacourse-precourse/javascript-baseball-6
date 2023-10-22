import {gameStart} from "./GameStart.js";
import {MissionUtils} from "@woowacourse/mission-utils";
class App {
    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        await gameStart();
    }
}

export default App;