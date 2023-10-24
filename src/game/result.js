/* 숫자 야구 게임 결과를 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";
import playGame from "../game/playGame.js";
import inputUserNumber from "../data/inputUserNumber.js";
import { TEXT } from '../comm/text.js';

export default function gameResult(userNumber, computerNumber){
    const strike = strikeCount(userNumber, computerNumber);
    const ball = ballCount(userNumber, computerNumber)-strike;
    compareNumber(strike, ball, computerNumber);
}

const compareNumber = async (strike, ball, computerNumber) => {
    if(strike === 3 && ball === 0){
        MissionUtils.Console.print(`${strike}${TEXT.STRIKE}`);
        MissionUtils.Console.print(`${TEXT.GAME_OVER}`);        
        return playRestart();
    }

    if (strike === 0 && ball === 0) {
        MissionUtils.Console.print(`${TEXT.NOTHING}`);
    } else if (strike > 0 && ball > 0) {
        MissionUtils.Console.print(`${ball}${TEXT.BALL} ${strike}${TEXT.STRIKE}`);
    } else if (strike > 0 && ball === 0) {
        MissionUtils.Console.print(`${strike}${TEXT.STRIKE}`);
    } else if (strike === 0 && ball > 0) {
        MissionUtils.Console.print(`${ball}${TEXT.BALL}`);
    }
    
    const newUserNumber = await inputUserNumber();

    return gameResult(newUserNumber, computerNumber);
}

const strikeCount = (userNumber, computerNumber) => {
    return userNumber.split("").reduce((acc, cur, idx) => {        
        if(computerNumber.split(",")[idx] === cur){
            acc++;
        }
        return acc;
    }, 0);
}

const ballCount = (userNumber, computerNumber) => {
    return userNumber.split("").reduce((acc, cur, idx) => {        
        if(computerNumber.includes(cur)){
            acc++;
        }
        return acc;
    }, 0);
}

const playRestart = async () => {
    const res = await MissionUtils.Console.readLineAsync(`${TEXT.RESTART_YN} \n`);
    if (res === '1') {
        return playGame();
    } else if (res === '2') {
        return;
    }
} 

