const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("./Constants");

const printInitMessage = function () {
    Console.print(OUTPUT_MESSAGE.INIT);
};

const printCount = function (count) {
    Console.print(count);
};

const printWin = function () {
    Console.print(OUTPUT_MESSAGE.WIN);
};

const parseCount = function ({ ballCount, strikeCount }) {
    if (strikeCount === 0 && ballCount === 0) return OUTPUT_MESSAGE.NOTHING;
    let response = '';
    if (ballCount !== 0) response += `${ballCount}볼`;
    if (ballCount !== 0 && strikeCount !== 0) response += ' ';
    if (strikeCount !== 0) response += `${strikeCount}스트라이크`;
    return response;
};

module.exports = { parseCount, printCount, printInitMessage, printWin };