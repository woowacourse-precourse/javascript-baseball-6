const { Random } = require("@woowacourse/mission-utils");
const { calcCount } = require("./Calc");
const { VALIDATION_RULE } = require("./Constants");
const { handleCommandInput, handleGuessInput } = require("./HandleInput");
const { parseCount, printCount, printInitMessage, printWin } = require("./HandleOutput");

class BaseballGame {
    #answer;
    constructor () {
        // 출력 처리
        printInitMessage();
        // 난수 부여
        this.#answer = this.#getComputerRandom();
    };

    #getComputerRandom () {
        const visited = new Set();
        const [MIN, MAX] = [VALIDATION_RULE.GUESS_MIN_VALUE_INCLUSIVE, VALIDATION_RULE.GUESS_MAX_VALUE_INCLUSIVE];
        let result = '';
        for (let i = 0; i < VALIDATION_RULE.VALID_GUESS_LENGTH; i++) {
            let cur = Random.pickNumberInRange(MIN, MAX);
            while (visited.has(cur)) {
                cur = Random.pickNumberInRange(MIN, MAX);
            }
            result += cur.toString();
            visited.add(cur);
        };
        return result;
    };

    async play () {
        try {
            // 입력 처리
            const guess = await handleGuessInput();
            // 계산
            const count = calcCount(guess, this.#answer);
            // 출력 처리
            const result = parseCount(count);
            printCount(result);
            // 결과 처리
            if (count.strikeCount === VALIDATION_RULE.VALID_GUESS_LENGTH) await this.#checkRetry();
            if (count.strikeCount !== VALIDATION_RULE.VALID_GUESS_LENGTH) await this.play();
        } catch(e) {
            throw e;
        };
    };

    async #checkRetry () {
        // 출력 처리
        printWin();
        // 결과 처리
        try {
            // 입력 처리
            const retry = await handleCommandInput();
            // 결과 처리
            if (retry) {
                this.#answer = this.#getComputerRandom();
                await this.play();
            }
            return;
        } catch(e) {
            throw e;
        };
    };
};

module.exports = BaseballGame;