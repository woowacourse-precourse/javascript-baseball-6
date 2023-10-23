import {MissionUtils} from "@woowacourse/mission-utils";
import {makeRandomNumber} from "./MakeRandomNumber.js";
import {resultOut} from "./ResultOut.js";
import {wantReStart} from "./WantReStart.js";

export async function gameStart() {
    let result;
    const Random_Number = makeRandomNumber();
    //3스트라이크가 나오기 전까지 반복
    while (result !== `3스트라이크`){
        const Input_Number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        result = resultOut(Random_Number, Input_Number);
        MissionUtils.Console.print(result);
    }
    if (result === `3스트라이크`) {
        //재시작 여부 확인
        const WANT_END = await wantReStart();
        //재시작 원할 경우 재귀를 이용하여 게임 재시작
        if (WANT_END === false) {
            await gameStart();
        } else return;
    }
}