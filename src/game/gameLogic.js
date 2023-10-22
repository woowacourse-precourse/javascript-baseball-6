import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/message.js"
import {
    isValidBaseballInput,
    isValidGameOption,
} from "../utils/validation.js";
import { generateRandomNumber } from "./generateRandomNumber.js";
import gameLoop from "./gameLoop.js";


const gameStart = async (computerNumber) => {
    try {
        while (true) {
            const userNumber = await getNumberInput();
            const { ball, strike } = checkNumberMatch(computerNumber, userNumber);
            const text = countBallStrike(ball, strike);
            if (text === "3스트라이크") {
                gameEnd();
                break;
            }
        }
    } catch (error) {
        throw new Error("[ERROR]");
    }
}

const getNumberInput = async () => {
    try {
        const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        if (!isValidBaseballInput(userInput)) {
            throw new Error("[ERROR]");
        }
        return userInput;
    } catch (error) {
        throw new Error("[ERROR]");
    }
}

const checkNumberMatch = (computerNumber, userNumber) => {
    let gameScore = {
        ball: 0,
        strike: 0,
    };
    const userNum = userNumber.split("");
    const computerNum = computerNumber.split("");

    for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
        for (let userIndex = 0; userIndex < 3; userIndex++) {
            if (computerNum[computerIndex] === userNum[userIndex]) {
                if (computerIndex === userIndex) {
                    gameScore.strike++;
                } else {
                    gameScore.ball++;
                }
            }
        }
    }
    return gameScore;
}

const countBallStrike = (ball, strike) => {
    let text = [];

    if (ball > 0) {
        text.push(`${ball}볼`);
    }

    if (strike > 0) {
        text.push(`${strike}스트라이크`);
    }

    if (text.length === 0) {
        text.push("낫싱");
    }

    const outPut = text.join(" ");
    MissionUtils.Console.print(outPut);

    return outPut;
}



const gameEnd = async () => {
    try {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const input = await askStartOrQuit();
        if (input === "1") {
            const computerNumber = generateRandomNumber();
            gameStart(computerNumber);
        } else {
            exitGame();
        }
    } catch (error) {
        throw new Error("[ERROR]");
    }
}

const askStartOrQuit = async () => {
    try {
        const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        if (!isValidGameOption(input)) {
            throw new Error("[ERROR]");
        }
        return input;
    } catch (error) {
        throw new Error("[ERROR]");
    }
}

const exitGame = () => {
    MissionUtils.Console.print("게임 종료");
    return;
}
export default gameStart;