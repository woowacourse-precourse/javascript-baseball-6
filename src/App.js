import { Console, Random } from '@woowacourse/mission-utils';
import PlayerInputNumber from './PlayerInputNumber.js';
import CheckBaseball from './CheckBaseball.js';
import ResponseGameRestart from './ResponseGameRestart.js';

export default class App {
	async play() {
		// 시작 문구 출력
		this.gameStart();

		while (true) {
			await this.gamePlay();
			const CHECKRESTART = await ResponseGameRestart();
			if (CHECKRESTART !== '1') {
				break;
			}
		}
	}
	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}
	randomNumber() {
		const RANDOMNUMBERLIST = [];
		while (RANDOMNUMBERLIST.length < 3) {
			const RANDOMNUMBER = Random.pickNumberInRange(1, 9);
			if (!RANDOMNUMBERLIST.includes(RANDOMNUMBER)) {
				RANDOMNUMBERLIST.push(RANDOMNUMBER);
			}
		}
		return RANDOMNUMBERLIST.join('');
		// return [1, 3, 5].join('');
	}
	async gamePlay() {
		const COMPUTER = this.randomNumber();
		let CHECKBASEBALL = true;
		while (CHECKBASEBALL) {
			const PLAYER = await PlayerInputNumber();
			CHECKBASEBALL = CheckBaseball(PLAYER, COMPUTER);
		}
		return;
	}
}

const app = new App();
app.play();
