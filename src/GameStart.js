import {MissionUtils} from "@woowacourse/mission-utils";
import {makeRandomNumber} from "./MakeRandomNumber.js";
import {resultOut} from "./ResultOut.js";
import {wantReStart} from "./WantReStart.js";

export async function gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let result;
    const Random_Number = makeRandomNumber();
    while (result !== `3스트라이크`){
        const Input_Number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        result = resultOut(Random_Number, Input_Number);
        MissionUtils.Console.print(result);
    }
    if (result === `3스트라이크`) {
        return await wantReStart();
    }
}