import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessage';
import { INPUT_NUMBER_ERROR } from '../constants/errorMessage';
import { validateNumber } from './checkError';

export const getInputNumber = async function getInputNumber() {
    const inputNumber = await MissionUtils.Console.readLineAsync(GAME_MESSAGE.inputNumberAsk);

    await validateNumber(inputNumber);

    return inputNumber;
}

export const getInputContinueNumber = async function getInputContinueNumber() {
    await MissionUtils.Console.print(GAME_MESSAGE.gameContinueAsk);

    const inputNumber = await MissionUtils.Console.readLineAsync();

    if (inputNumber === '1' || inputNumber === '2') {
        return Number(inputNumber);
    }

    throw new Error(INPUT_NUMBER_ERROR.continueNumberError);
}
