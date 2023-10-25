import { Console, Random } from '@woowacourse/mission-utils';
import playerInputNumber from './playerInputNumber.js';
import checkBaseball from './checkBaseball.js';
import responseGameRestart from './responseGameRestart.js';

export default class App {
	async play() {
		this.gameStart();
		while (true) {
			await this.gamePlay();
			const CHECKRESTART = await responseGameRestart();
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
	}

	async gamePlay() {
		const COMPUTER = this.randomNumber();
		let CHECKBASEBALL = true;
		while (CHECKBASEBALL) {
			const PLAYER = await playerInputNumber();
			CHECKBASEBALL = checkBaseball(PLAYER, COMPUTER);
		}
	}
}

const app = new App();
app.play();
