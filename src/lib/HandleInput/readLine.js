const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constants");

async function readGuessInput() {
    return await Console.readLineAsync(INPUT_MESSAGE.GUESS, (answer) => {
        response = answer;
    });
};

module.exports = {readGuessInput};