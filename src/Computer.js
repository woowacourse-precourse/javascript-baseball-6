import { Random } from "@woowacourse/mission-utils";

export const createRandomNumber = () => {
    const numbers = new Set();

    while (numbers.size < 3) {
        numbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...numbers];
};
