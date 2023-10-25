import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessage';

export const getComputerNumber = async function getComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
        const number = await MissionUtils.Random.pickNumberInRange(1, 9);

        if (!computer.includes(number)) {
            computer.push(number);
        }
    }

    return computer;
}

export const getGameResult = function getGameResult(computerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < inputNumber.length; i++) {
        const computerNumberIndex = computerNumber.indexOf(Number(inputNumber[i]));

        if (i === computerNumberIndex) {
            strike++;
        } else if (computerNumberIndex !== -1) {
            ball++;
        }
    }

    return { strike, ball };
}

export const printGameResult = async function printGameResult(strike, ball) {
    if (strike === 3) {
        await MissionUtils.Console.print(GAME_MESSAGE.strike);
        await MissionUtils.Console.print(GAME_MESSAGE.successGame);
    } else if (ball === 0 && strike === 0) {
        await MissionUtils.Console.print(GAME_MESSAGE.nothing);
    } else {
        await MissionUtils.Console.print(GAME_MESSAGE.getStrikeAndBallMessage(strike, ball));
    }
}