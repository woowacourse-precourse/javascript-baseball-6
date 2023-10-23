import { Console, Random } from '@woowacourse/mission-utils';
import PlayerInputNumber from './PlayerInputNumber.js';

class App {
	async play() {
		this.gameStart();
		PlayerInputNumber();
	}
	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}
}

const app = new App();
app.play();
