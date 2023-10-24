
import { MissionUtils } from "@woowacourse/mission-utils";
import {viewError} from "../view/text-case.js";
import { setUserInputNum } from "../model/data.js";
import {error} from "../model/data.js";

const gameContinueInputController = async function continueController(viewInput){
    while(true){
        var stop = await MissionUtils.Console.readLineAsync(viewInput);
        try{
            if(parseInt(stop) === 1){
                return true;
            }
            if(parseInt(stop) === 2){
                return false;
            }
            error = false;
            throw new Error('[ERROR] 잘못된 입력입니다.');
        }catch(err){
            error = false;
            throw new Error('[ERROR] 잘못된 입력입니다.');
        }

    }       
}

const inputController = async function inputController(caseNum, viewText){

    if(caseNum === 1){
        MissionUtils.Console.print(viewText);
        return;
    }

    if(caseNum === 2){
        try{
            await getInputNum(viewText);
        }catch(err){
            throw err;
        }

    }

}


const getInputNum = async function getInputNum(viewText){
    var answer = await MissionUtils.Console.readLineAsync(viewText);
    try{
        setUserInputNum(await answer);
    }catch(e){
        throw e;
    }
        

    
}

export {inputController, gameContinueInputController as continueController};