
import { MissionUtils } from "@woowacourse/mission-utils";
import {setBallStrike, setAnswerNum, answerNum, userInputNum, correct, strikeCnt} from "./data.js";

const gameCase = async function gameCase(gameState){
    
    switch (gameState) {
        //시작 문구 출력
        case 1 : {
            return await caseNum1();
        }
        //숫자 입력 요청 문구 출력
        case 2 : {
            return await caseNum2();
        }

        case 3 : {
            // 입력한 값에 대한 정답 반환
            return await caseNum3();
        }
    }
}
export default gameCase;


const caseNum1 = async function caseNum1() {
    
    while (answerNum.length < 3) {
        setAnswerNum(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    return 1;
}

const caseNum2 = function caseNum2(){
    return 2;
}

const caseNum3 = async function caseNum3() {

    for (let idx = 0; idx < 3; idx += 1){
        

        if (answerNum[idx] === userInputNum[idx]) {
            setBallStrike(1);
            continue;
        }
        for (let compare = 0; compare < 3; compare += 1) {
            if (idx === compare) {
                continue;
            }
            if (answerNum[idx] === userInputNum[compare]) {
                setBallStrike(0);
            }
        }


    }


    if (strikeCnt == 3) {
        return 4;
    }
    return 3;
}