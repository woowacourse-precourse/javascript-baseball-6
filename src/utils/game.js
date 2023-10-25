import { MissionUtils } from '@woowacourse/mission-utils';
import { gameMessage } from '../constants/gameMessage';

export async function getComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
        const number = await MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }

    return computer;
}

export function getGameResult(computerNumber, inputNumber) {
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

export async function printGameResult(strike, ball) {
    if (strike === 3) {
        await MissionUtils.Console.print(gameMessage.STRIKE);
        await MissionUtils.Console.print(gameMessage.SUCCESS_GAME);
    } else if (ball === 0 && strike === 0) {
        await MissionUtils.Console.print(gameMessage.NOTHING);
    } else {
        await MissionUtils.Console.print(gameMessage.getStrikeAndBallMessage(strike, ball));
    }
}