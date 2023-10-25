import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./Define.js";
import { validatePlayerInput } from "./GameRefree.js"
import { printErrorMessage } from "./GameManager.js";

export const getPlayerInput = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE);
    if (!validatePlayerInput(input)){
        printErrorMessage();
    }
    return input;
}
