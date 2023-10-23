import { MissionUtils } from "@woowacourse/mission-utils";
import randomNum from "./RandomNum.js";
import isValidInput from "./IsValidInput.js";

//게임 시작 - 랜덤 숫자 생성, 숫자를 입력받기 위한 함수 호출
const start = async() => {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let answerNumber = randomNum();
    let isSame = false;
    while(!isSame){
        let inputNumber = await inputNum();
        isSame = checkNum(inputNumber, answerNumber);
    }
    replay();
}

//사용자에게 숫자 입력받기
const inputNum = async() => {
    let inputNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해 주세요 : ");
    if (!isValidInput(inputNumber)) {
        throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
    }
    return inputNumber;
}

//힌트 출력하기
const checkNum = (inputNumber, answerNumber) => {
    let userNumber = inputNumber.toString().split('').map(Number);

    let strike = 0;
    let ball = 0;

    // 정답과 사용자 입력값 비교
    for(let i = 0; i < answerNumber.length; i++){
        for(let j = 0; j < userNumber.length; j++){
            if(answerNumber[i] === userNumber[j]){
                if(i === j){
                    strike++;
                } else {
                    ball++;
                }
            }
        }
    }

    let hint = [];
    if(ball !== 0) {
        hint.push(`${ball}볼`);
    }
    if (strike !== 0){
        hint.push(`${strike}스트라이크`);
    }
    if(ball === 0 && strike === 0) {
        hint.push("낫싱");
    }
    
    MissionUtils.Console.print(hint.join(' '));

    if(strike === 3){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return true;
    } else {
        return false;
    }
}


//게임 재시작 여부 묻기
const replay = async() => {
    const replay = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (replay === '1') {
        start();
    } else if (replay === '2') {
        //gmae end
    } else {
        throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
    }

}

export default start;