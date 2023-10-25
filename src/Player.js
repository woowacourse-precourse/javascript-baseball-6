import {Console} from "@woowacourse/mission-utils";
import {INPUT_MESSAGE} from "./Define.js";
import {VALIDATE_PLAYER_INPUT} from "./GameRefree.js"
import {PRINT_ERROR_MESSAGE} from "./GameManager.js";

export const PLAYER_INPUT = async () => {
    const INPUT = await Console.readLineAsync(INPUT_MESSAGE);
    if (!VALIDATE_PLAYER_INPUT(INPUT)){
        PRINT_ERROR_MESSAGE();
    }
    return INPUT;
}