
import { MissionUtils } from "@woowacourse/mission-utils";
import {setAnswerNum, answerNum, userInputNum, correct} from "./data.js";

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


const caseNum1 = async function caseNum1(){
    setAnswerNum(MissionUtils.Random.pickNumberInRange(1, 9)
    +10*MissionUtils.Random.pickNumberInRange(1, 9)
    +100*MissionUtils.Random.pickNumberInRange(1, 9)
    );
    return 1;
}

const caseNum2 = function caseNum2(){
    return 2;
}

const caseNum3 = async function caseNum3(){
    if(answerNum == userInputNum){
        console.log(answerNum);
        console.log(userInputNum);
        //게임 종료
        return 3;
    }
   
    var answerArr = [ answerNum%10, parseInt((answerNum/10)%10),parseInt((answerNum/100)%10)];
    var userArr = [userInputNum%10, parseInt(userInputNum/10%10), parseInt(userInputNum/100%10)];

    console.log(answerArr);
    console.log(userArr);
    return 2;
}