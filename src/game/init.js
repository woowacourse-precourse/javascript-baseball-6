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
            throw new Error("[ERROR]");

        }
        userNumber = await getUserNumber();
    }
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    await choiceForGame();

}

const choiceForGame = async () => {
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    try {
        const userChoice = await MissionUtils.Console.readLineAsync("");
        if (userChoice === "1") {
            await startGame();
        } else if (userChoice === "2") {
            return;
        } else {
            throw new Error("[Error]");
        }
    } catch (error) {
        throw new Error("[Error]");
    }

}


export {startGame};
