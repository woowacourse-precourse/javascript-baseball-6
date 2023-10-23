import { Console, Random } from '@woowacourse/mission-utils';
import PlayerInputNumber from './PlayerInputNumber.js';

class App {
	async play() {
		this.gameStart();
		const COMPUTER = this.randomNumber();
		const PLAYER = await PlayerInputNumber();
	}
	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}
	randomNumber() {
		return Random.pickUniqueNumbersInRange(1, 9, 3).join('');
	}
}

const app = new App();
app.play();
