import { GAME } from './pages/texts.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { inputUserNumber, checkGameResults, randomNumber, printGameResults, resetGame } from './pages/modules.js';

class App {
    async play() {
        MissionUtils.Console.print(GAME.START);

        /* 컴퓨터 랜덤 숫자 생성 */
        let computerNumbers = randomNumber();
        let restart = true;
        while (restart) {
            let userNumbers = await inputUserNumber();
            if (printGameResults(checkGameResults(userNumbers, computerNumbers))) {
                restart = await resetGame();
                if (restart) computerNumbers = randomNumber();
            }
        }
    }
}

export default App;
