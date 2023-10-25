import { Console } from '@woowacourse/mission-utils';
import { BaseballGame } from './BaseballGame1';

class App {
    constructor() {
        this.game = new BaseballGame();
    }

    play() {
        Console.print('숫자 야구 게임을 시작합니다.');
        this.game.startGame();
    }
}

export default App;
