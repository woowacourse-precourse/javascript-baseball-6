import { MissionUtils } from '@woowacourse/mission-utils';
import { validateInputUserNumbers, validateInputNewGameSelection } from './validate.js';

const input = async (printString = '') => {
    return Number(await MissionUtils.Console.readLineAsync(printString));
};

const inputUserNumbers = async (fixLength) => {
    const userNumbers = await input('숫자를 입력하세요 : ');
    validateInputUserNumbers(userNumbers, fixLength);
    return [...String(userNumbers)].map(v => Number(v));
};

const checkNewGame = (selection) => {
    return selection === 1 ? true : false;
}

const inputNewGameSelection = async () => {
    const selection = await input();
    validateInputNewGameSelection(selection);

    return checkNewGame(selection);
};

export {
    inputUserNumbers,
    inputNewGameSelection
};