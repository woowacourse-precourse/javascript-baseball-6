import {makeRandomNumber} from './MakeRandomNumber.js'
import {MissionUtils} from "@woowacourse/mission-utils";
import {resultOut} from "./ResultOut.js";
import {printInputScreen} from "./PrintInputScreen.js";
import {wantReStart} from "./WantReStart.js";
class App {
    async play() {
            let gameEnd = false;
            while (!gameEnd){
                MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
                let result;
                let randomNumber = makeRandomNumber();
                while (result !== `3스트라이크`){
                    const inputNum = await printInputScreen();
                    result = resultOut(randomNumber, inputNum);
                    MissionUtils.Console.print(result);
                }
                if (result === `3스트라이크`) {

                    const ReStart = await wantReStart();
                    if (ReStart === '1') {
                        gameEnd = false;
                    } else if (ReStart === '2') {
                        gameEnd = true;
                    }

                }
            }


    }
}

export default App;
