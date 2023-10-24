import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../../constants/GameMessage.js';
import isAllZero from '../../utils/isAllZero.js';

class Output {
	static printStart() {
		Console.print(GAME_MESSAGE.start);
	}

	// 더 단순하게 할 수 있을 것 같다.
	static printResult([ballCount, strikeCount]) {
		let judgeComment = '';

		if (isAllZero([ballCount, strikeCount]))
			return Console.print(GAME_MESSAGE.nothing); // 낫싱

		judgeComment += ballCount !== 0 ? ballCount + GAME_MESSAGE.ball + ' ' : '';
		judgeComment += strikeCount !== 0 ? strikeCount + GAME_MESSAGE.strike : '';

		Console.print(judgeComment);
	}

	static printClear() {
		Console.print(`${GAME_MESSAGE.clear} ${GAME_MESSAGE.exit}`);
	}

	// static printExit() {
	// 	Console.print();
	// }
}

export default Output;
