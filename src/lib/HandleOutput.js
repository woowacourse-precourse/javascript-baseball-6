const { Console } = require("@woowacourse/mission-utils")
const { OUTPUT_MESSAGE } = require("./Constants")

function printInitMessage() {
    Console.print(OUTPUT_MESSAGE.INIT)
}

function printCount(count) {
    Console.print(count)
}

function printWin() {
    Console.print(OUTPUT_MESSAGE.WIN)
}

function parseCount(count) {
    const {ballCount, strikeCount} = count
    if (strikeCount === 0 && ballCount === 0) return OUTPUT_MESSAGE.NOTHING;
    let response = '';
    if (ballCount !== 0) response += `${ballCount}볼`;
    if (ballCount !== 0 && strikeCount !== 0) response += ' ';
    if (strikeCount !== 0) response += `${strikeCount}스트라이크`;
    return response;
}

module.exports = { parseCount, printCount, printInitMessage, printWin }