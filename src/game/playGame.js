/* 숫자 야구 게임 과정을 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";
import result from "../game/result.js";
import inputUserNumber from "../data/inputUserNumber.js";
import createComputerNumber from "../data/createComputerNumber.js";

export default async function playGame(){
    const userNumber = await inputUserNumber();
    const computerNumber = await createComputerNumber();
    return await result(userNumber, computerNumber);
}

