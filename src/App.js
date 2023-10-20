import {makeRandomNumber} from './MakeRandomNumber.js'
import {MissionUtils} from "@woowacourse/mission-utils";
import {resultOut} from "./ResultOut.js";

class App {
    async play() {
        async function gamePlay() {
            let randomNumber = makeRandomNumber();
            MissionUtils.Console.print(randomNumber);
            let result;
            while (result !== `3스트라이크`) {
                try {
                    const inputNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
                    result = resultOut(randomNumber, inputNum);
                } catch (e) {
                    MissionUtils.Console.print('[ERROR]');
                  break;
                }
                MissionUtils.Console.print(result);
            }
            if (result === `3스트라이크`) {
                try {
                    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
                    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
                    const restart = await MissionUtils.Console.readLineAsync('');
                    if (restart === '1') {
                        gamePlay();
                    } else if (restart === '2') {

                    }else {
                        throw new Error('[ERROR]');
                    }
                }catch (e){
                    MissionUtils.Console.print(e);
                }

            }
        }

        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        await gamePlay();

    }
}

let san = new App();
san.play();

export default App;
