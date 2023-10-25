import { Random } from "@woowacourse/mission-utils";
import {INPUT_SIZE, NUMBER_MAX, NUMBER_MIN} from "./Define.js";

export const createRandomNumber = () => {
    const numbers = new Set();

    while (numbers.size < INPUT_SIZE) {
        numbers.add(Random.pickNumberInRange(NUMBER_MIN, NUMBER_MAX));
    }
    return [...numbers];
};
