import { MissionUtils } from "@woowacourse/mission-utils";
import randomNum from "./RandomNum";
import isValidInput from "./IsValidInput";

//게임 시작 - 랜덤 숫자 생성, 숫자를 입력받기 위한 함수 호출
const start = () => {
    const answerNumber = randomNum();
    console.log("answerNumber " + answerNumber);
    inputNum(answerNumber);
}

//사용자에게 숫자 입력받기
const inputNum = (answerNumber) => {
    MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (inputNumber) => {
        if (!isValidInput(inputNumber)) {
            throw new Error();
        }
        checkNum(inputNumber, answerNumber);
    });
}

//힌트 출력하기
const checkNum = (inputNumber, answerNumber) => {
    let userNumber = inputNumber.toString().split('').map(Number);
    //입력값을 숫자 -> 문자열 -> 개별 문자의 배열 -> 숫자로된 배열로 변경(정답과 비교를 위해)

    let strike = 0;
    let ball = 0;

    //정답과 사용자 입력값 비교
    for(let i = 0; i < answerNumber.length; i++){
        for(let j = 0; j < userNumber.length; j++){
            if(answerNumber[i] === userNumber[j]){
                if(i === j){
                    strike ++;
                } else {
                    ball++;
                }
            }
        }
    }

    if(strike === 3) {
        MissionUtils.Console.print("3스트라이크");
        askReplay();
    } else {
        printHint(strike, ball);
    }
}

//힌트출력하기
const printHint = (strike, ball) => {
    if(strike === 0 && ball === 0) {
        MissionUtils.Console.print("낫싱");
    } else {
        if (strike > 0) {
            MissionUtils.Console.print(strike + "스트라이크");
        }
        if (ball > 0) {
            MissionUtils.Console.print(ball + "볼");
        }
        //숫자 다시 입력받기
        inputNum();
    }
}

//게임 재시작 여부 묻기
const askReplay = () => {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (replay) => {
        if(replay === 1){
            return start();
        } else if(replay === 2){
            return gameEnd();
        } else {
            throw new Error();
        }
    })
}

//게임종료
const gameEnd = () => {
    MissionUtils.Console.close();
}

export default start;