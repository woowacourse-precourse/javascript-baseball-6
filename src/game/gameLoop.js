import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/message.js";
import gameStart from "./gameLogic.js";
import { generateRandomNumber } from "./generateRandomNumber.js";

const gameLoop = async () => {
    try {
        const computerNumber =  await generateRandomNumber();
        await gameStart(computerNumber);
    } catch (error) {
        throw new Error("[ERROR]");
    }

}

export default gameLoop;