import { Console } from "@woowacourse/mission-utils";

export function checkUserNum(COM_NUM, USER_NUM) {

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
        if (USER_NUM[i] === COM_NUM[i]) {
            strike++;
        }
        else if (USER_NUM.includes(COM_NUM[i])) {
            ball++;
        }
    }

    if (strike === 0 && ball === 0) {
        Console.print("낫싱")
    }
    else if (strike === 0) {
        Console.print(`${ball}볼`)
    }
    else if (ball === 0) {
        Console.print(`${strike}스트라이크`)
    }
    else {
        Console.print(`${ball}볼 ${strike}스트라이크`)
    }

    return strike;

}
