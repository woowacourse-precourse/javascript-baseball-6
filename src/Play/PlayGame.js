import { MissionUtils } from "@woowacourse/mission-utils";
import randomNum from "./RandomNum.js";
import isValidInput from "./IsValidInput.js";
import { count, printHint } from "./Count.js";

//게임 시작 - 랜덤 숫자 생성, 숫자를 입력받기 위한 함수 호출
const start = async() => {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let answerNumber = randomNum();
    let isPlaying = false;
    while(!isPlaying){
        let inputNumber = await inputNum();
        isPlaying = checkNum(inputNumber, answerNumber);
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


//힌트 계산하기
const checkNum = (inputNumber, answerNumber) => {
    let userNumber = Array.from(inputNumber, Number);

    let hintcount = {
        strike : 0,
        ball : 0
    };

    // 정답과 사용자 입력값 비교
    for(let i = 0; i < answerNumber.length; i++){
        for(let j = 0; j < userNumber.length; j++){
            count(userNumber, answerNumber, i, j, hintcount);
        }
    }

    return printHint(hintcount);
}


//게임 재시작 여부 묻기
const replay = async() => {
    const replay = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (replay === '1') {
        return start();
    } else if (replay === '2') {
        //gmae end
        return false;
    } else {
        throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
    }

}

export default start;