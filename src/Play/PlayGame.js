import { MissionUtils, Console } from "@woowacourse/mission-utils";
import randomNum from "./RandomNum.js";
import isValidInput from "./IsValidInput.js";

//게임 시작 - 랜덤 숫자 생성, 숫자를 입력받기 위한 함수 호출
const start = () => {
    let answerNumber = randomNum();
    inputNum(answerNumber);
}

//사용자에게 숫자 입력받기
const inputNum = async (answerNumber) => {
    try {
        const inputNumber = await MissionUtils.Console.readLine("숫자를 입력해 주세요 : ");
        if (!isValidInput(inputNumber)) {
            throw new Error("숫자가 잘못된 형식입니다.");
        }
        checkNum(inputNumber, answerNumber);
    } catch (error) {
        gameEnd();
    }
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
                    strike++;
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
        printHint(strike, ball, answerNumber);
    }
}

//힌트출력하기
const printHint = (strike, ball, answerNumber) => {
    let hint = [];
    if(strike !== 0 || ball !== 0) {
        if (strike > 0) {
            hint.push(`${strike}스트라이크`);
        }
        if (ball > 0) {
            hint.push(`${ball}볼`);
        }
    } else {
        hint.push("낫싱");
    }
    MissionUtils.Console.print(hint.join(''));

    //숫자 다시 입력받기
    inputNum(answerNumber);
}

//게임 재시작 여부 묻기
const askReplay = async () => {
    try {
        const replay = await MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        if (replay === '1') {
            start();
        } else if (replay === '2') {
            gameEnd();
        } else {
            throw new Error("숫자가 잘못된 형식입니다.");
        }
    } catch (error) {
        gameEnd();
    }
}

//게임종료
const gameEnd = () => {
    //MissionUtils.Console.close();
}

export default start;