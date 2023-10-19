const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constants");

const readGuessInput = async function () {
    return await Console.readLineAsync(INPUT_MESSAGE.GUESS, (answer) => answer);
};

const readCommandInput = async function () {
    return await Console.readLineAsync(INPUT_MESSAGE.COMMAND, (answer) => answer);
};

module.exports = { readCommandInput, readGuessInput };