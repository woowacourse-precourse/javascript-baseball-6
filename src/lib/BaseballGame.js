const { VALIDATION_RULE } = require("./Constants");
const { Random } = require("@woowacourse/mission-utils");
const { handleGuessInput } = require("./HandleInput");
const { parseCount, printCount } = require("./HandleOutput")
const { calcCount } = require("./Calc")

class BaseballGame {
    constructor() {
        this.numbers = this.#getComputerRandom();
    };

    #getComputerRandom() {
        const visited = new Set();
        const [MIN, MAX] = [VALIDATION_RULE.GUESS_MIN_VALUE_INCLUSIVE, VALIDATION_RULE.GUESS_MAX_VALUE_INCLUSIVE];
        let result = '';
        for (let i = 0; i < VALIDATION_RULE.VALID_GUESS_LENGTH; i++) {
            let cur = Random.pickNumberInRange(MIN, MAX);
            while (visited.has(cur)) {
                cur = Random.pickNumberInRange(MIN, MAX);
            }
            result += cur.toString();
        };
        return result;
    };

    async play() {
        try {
            const guess = await handleGuessInput();
            const count = calcCount(guess, this.numbers);
            const result = parseCount(count);
            printCount(result);
            if (count.strikeCount === VALIDATION_RULE.VALID_GUESS_LENGTH) this.checkRetry();
            if (count.strikeCount !== VALIDATION_RULE.VALID_GUESS_LENGTH) this.play();
        } catch(e) {
            throw e;
        };
    };

    checkRetry() {
        try {

        } catch(e) {

        }
    }
};

module.exports = BaseballGame;