import gameCase from "../model/game-case.js"
import {inputController,continueController}  from "./input-controller.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import {pickView, viewError, viewGameContinue} from "../view/text-case.js";
import {correct} from "../model/data.js";

//전체 게임 실행 or 종료
const gameStart = async function(){
   
    var gameContinue = true;
    
    while(gameContinue){

        try{
            await gamePlay();
        }catch(err){
            throw err;
        }

        try{
            var answer = await continueController(viewGameContinue);
            gameContinue = answer;
        }catch(err){
            throw err;
        }      
         
    }

}
export default gameStart;

//게임 진행 -> state에 따른 반복문 실행
const gamePlay = async function(){
    var gameState = 1;
    var caseNum = 1;
    while(true && correct !== true){
        caseNum = parseInt(await gameCase(gameState),10);
        var viewText = await pickView(caseNum);

        if(caseNum===3)break;
        try{
            await inputController(caseNum, String(await viewText));
            
        }catch(err){
            throw err;
        }
        if(gameState === 3)gameState=2;
        if(gameState === 1 || gameState === 2)gameState++;

        
    }
    

}