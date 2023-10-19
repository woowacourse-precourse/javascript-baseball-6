const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constants");

async function readGuessInput() {
    return await Console.readLineAsync(INPUT_MESSAGE.GUESS, (answer) => {
        return answer;
    });
};

async function readCommandInput() {
    return await Console.readLineAsync(INPUT_MESSAGE.COMMAND, (answer) => {
        return answer
    })
}

module.exports = {readCommandInput, readGuessInput};