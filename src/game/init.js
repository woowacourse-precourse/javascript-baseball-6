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
        await choiceForGame();
    }
}

const choiceForGame = async () => {
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const userChoice = await getUserNumber();
    // 유효성 검사
    if (userChoice === "1") {
        await startGame();
    } else {
        return 0;
    }
}


export {startGame};
