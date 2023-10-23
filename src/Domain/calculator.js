import { MissionUtils } from "@woowacourse/mission-utils";


export function calculateScore (answer, inputNumberList) {
    let strike = 0
    let ball = 0
    for (let i = 0; i <3; i++) {
        if (answer[i] === inputNumberList[i]) {
            strike += 1;
        }
        else if (answer.includes(inputNumberList[i])) {
            ball += 1;
        }
    }
    return {strike, ball}
}

export function printResult(strike, ball) {
    
     if (strike === 3) {
        Console.print(
            `${strike}스트라이크입니다\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        return;
    }
    if (!strike && !ball) {
        Console.print("낫싱");
        return;
    }
    if (strike && ball) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike && !ball) {
        Console.print(`${strike}스트라이크`);
    } else if (!strike && ball) {
        Console.print(`${ball}볼`);
    }
}

