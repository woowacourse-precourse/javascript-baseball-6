import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME } from '../pages/texts';

export default async function resetGame() {
    const userInput = await MissionUtils.Console.readLineAsync(GAME.RESTART);

    if (userInput === '1') {
        return true;
    } else if (userInput === '2') {
        return false;
    }
}
