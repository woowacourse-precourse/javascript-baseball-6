
import { MissionUtils } from "@woowacourse/mission-utils";
import {viewError} from "../view/text-case.js";


const gameContinueInputController = async function continueController(viewInput){
    while(true){
        var stop = await MissionUtils.Console.readLineAsync(viewInput);
        if(parseInt(stop) === 1){
            return true;
        }
        if(parseInt(stop) === 2){
            return false;
        }
        MissionUtils.Console.print(viewError);
    }       
}

const inputController = async function inputController(caseNum, viewState){

    if(caseNum === 1)return;

    if(caseNum === 2){
        //숫자 입력
       await getInputNum(caseNum, viewState);
    }

}


const getInputNum = async function getInputNum(caseNum, viewInput){
    var answer = await MissionUtils.Console.readLineAsync(viewInput);
    console.log(answer.status);
    if(answer<100|| answer>999){
        answer = 0;
        MissionUtils.Console.print(answer);
        return "error";
    }
    MissionUtils.Console.print(answer);
    return answer;
    
}

export {inputController, gameContinueInputController as continueController};