const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constants");

const readGuessInput = async function () {
    return await Console.readLineAsync(INPUT_MESSAGE.GUESS, (answer) => {
        return answer;
    });
};

const readCommandInput = async function () {
    return await Console.readLineAsync(INPUT_MESSAGE.COMMAND, (answer) => {
        return answer;
    });
};

module.exports = { readCommandInput, readGuessInput };