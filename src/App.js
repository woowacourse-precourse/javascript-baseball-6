import { Console, Random } from '@woowacourse/mission-utils';
import playerInput from './playerInput.js';
import checkingBaseball from './checkingBaseball.js';
import gameRestart from './gameRestart.js';

export default class App {
	async play() {
		this.gameStart();
		while (true) {
			await this.gamePlay();
			const CHECK_RESTART = await gameRestart();
			if (CHECK_RESTART !== '1') {
				break;
			}
		}
	}

	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}

	randomNumber() {
		const RANDOM_NUMBER_LIST = [];
		while (RANDOM_NUMBER_LIST.length < 3) {
			const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
			if (!RANDOM_NUMBER_LIST.includes(RANDOM_NUMBER)) {
				RANDOM_NUMBER_LIST.push(RANDOM_NUMBER);
			}
		}
		return RANDOM_NUMBER_LIST.join('');
	}

	async gamePlay() {
		const COMPUTER = this.randomNumber();
		let booleanBaseball = true;
		while (booleanBaseball) {
			const PLAYER = await playerInput();
			booleanBaseball = checkingBaseball(PLAYER, COMPUTER);
		}
	}
}

const app = new App();
app.play();
