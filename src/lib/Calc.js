const { VALIDATION_RULE } = require("./Constants");

const calcCount = function (guess, coumputerNumbers) {
    const strikeCount = getStrike(guess, coumputerNumbers);
    const ballCount = getMatch(guess, coumputerNumbers) - strikeCount;
    return {ballCount, strikeCount};
};

const getMatch = function (guess, coumputerNumbers) {
    let count = 0;
    const visited = new Set();
    for (const char of guess) visited.add(char);
    for (const char of coumputerNumbers) {
        if (visited.has(char)) count += 1;
    };
    return count;
};

const getStrike = function (guess, coumputerNumbers) {
    let count = 0;
    for (let i= 0; i < VALIDATION_RULE.VALID_GUESS_LENGTH; i++) {
        if (guess[i] === coumputerNumbers[i]) count += 1;
    };
    return count;
};


module.exports = { calcCount };