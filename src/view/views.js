import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js'

export default class views{
	constructor() {
		Console.print(MESSAGE.START);
	}

	correct() {
		Console.print(MESSAGE.CORRECT);
	}

	result(result) {
		Console.print(this.makeResultMessage(result));
	}

	async retry() {
		const reryOrNot = Console.readLineAsync(MESSAGE.RETRY);
		return reryOrNot;
	}

	gameOver() {
		Console.print(MESSAGE.GAMEOVER);
	}
}