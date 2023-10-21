import {MissionUtils} from "@woowacourse/mission-utils";
import {makeRandomNumber} from "./MakeRandomNumber.js";
import {printInputScreen} from "./PrintInputScreen.js";
import {resultOut} from "./ResultOut.js";
import {wantReStart} from "./WantReStart.js";

export async function gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let result;
    const Random_Number = makeRandomNumber();
    while (result !== `3스트라이크`){
        const Input_Number = await printInputScreen('숫자를 입력해주세요 : ');
        result = resultOut(Random_Number, Input_Number);
        MissionUtils.Console.print(result);
    }
    if (result === `3스트라이크`) {

        const RESTART = await wantReStart();
        if (RESTART === '1') {
            return false;
        } else if (RESTART === '2') {
            return true;
        }else {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

    }
}