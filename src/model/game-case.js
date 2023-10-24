
import { MissionUtils } from "@woowacourse/mission-utils";

const gameCase = function gameCase(gameState){
    switch (gameState) {
        //시작 문구 출력
        case 1 : {
            caseNum1();
            break;
        }
        //숫자 입력 요청 문구 출력
        case 2 : {
        }
    }
}
export default gameCase;

var answerNum;
const caseNum1 = function caseNum1(){
    //랜덤 숫자 생성 -> 정답
    answerNum = MissionUtils.Random.pickNumberInRanger(1,9);
    return 1;
}


const caseNum2 = function caseNum2(){
    return 2;
}

var userInputNum;
const caseNum3 = function caseNum3(){
    //인풋 받는 메서드 소환
}