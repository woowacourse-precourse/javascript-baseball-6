import {generateComputerAnswer, getHint} from "./computer.js";
import {getUserNumber, validateUserNumber} from "./user.js";
import {MissionUtils} from "@woowacourse/mission-utils";


const startGame = async () => {
    const computerAnswer = generateComputerAnswer();
    let userNumber = await getUserNumber();

    while (computerAnswer !== userNumber) {
        if (validateUserNumber(userNumber)) {
            getHint(computerAnswer, userNumber);
        } else {
            MissionUtils.Console.print("[ERROR]") //throw로 예외처리 필요
            break;
        }
        userNumber = await getUserNumber();
    }
    if (computerAnswer === userNumber) { ////throw로 예외처리 후에는 안필요함
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
}


export {startGame};
