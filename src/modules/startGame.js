import { Console } from '@woowacourse/mission-utils';
const { MESSAGES } = require("../constants");

startGame = () => {
    Console.print(MESSAGES.START);
};

module.exports.startGame = startGame;
