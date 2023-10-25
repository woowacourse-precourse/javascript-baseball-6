import { MissionUtils } from '@woowacourse/mission-utils';
import { gameMessage } from '../constants/gameMessage';
import { inputNumberError } from '../constants/errorMessage';
import { validateNumber } from './checkError';

export async function getInputNumber() {
    const inputNumber = await MissionUtils.Console.readLineAsync(gameMessage.INPUT_NUMBER_ASK);
    await validateNumber(inputNumber);
    return inputNumber;
}

export async function getInputContinueNumber() {
    await MissionUtils.Console.print(gameMessage.GAME_CONTINUE_ASK);
    const inputNumber = await MissionUtils.Console.readLineAsync();

    if (inputNumber === '1' || inputNumber === '2') {
        return Number(inputNumber);
    }

    throw new Error(inputNumberError.CONTINUE_NUMBER_ERROR);
}
