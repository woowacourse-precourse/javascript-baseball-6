/* 숫자 야구 게임 결과를 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";
import playGame from "../game/playGame.js";
import inputUserNumber from "../data/inputUserNumber.js";

export default function gameResult(userNumber, computerNumber){
    const strike = strikeCount(userNumber, computerNumber);
    const ball = ballCount(userNumber, computerNumber)-strike;
    compareNumber(strike, ball, userNumber, computerNumber);
}

async function compareNumber(strike, ball, userNumber, computerNumber){

    if(strike === 3 && ball === 0){
        MissionUtils.Console.print(`${strike}스트라이크`);
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');        
        return playRestart();
    }

    if (strike === 0 && ball === 0) {
        MissionUtils.Console.print('낫싱');
    } else if (strike > 0 && ball > 0) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike > 0 && ball === 0) {
        MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike === 0 && ball > 0) {
        MissionUtils.Console.print(`${ball}볼`);
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

async function playRestart(){
    MissionUtils.Console.readLineAsync()
    .then((res) => {
        MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
        MissionUtils.Console.print(`${res}`)
        if(res == 1){
            return playGame();
        }else if(res == 2){
            return;
        }
    })
    .catch((error) => {
        MissionUtils.Console.print(error);
    });    
}

