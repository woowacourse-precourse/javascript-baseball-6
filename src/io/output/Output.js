import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../../constants/GameMessage.js';

class Output {
	static printStart() {
		Console.print(GAME_MESSAGE.start);
	}

	static printResult(counts) {
		const [ballCount, strikeCount, isAllZero] = counts;

		let judgeComment = '';

		// nothing일 경우
		if (isAllZero) return Console.print(GAME_MESSAGE.nothing);

		judgeComment += ballCount !== 0 ? ballCount + GAME_MESSAGE.ball + ' ' : '';
		judgeComment += strikeCount !== 0 ? strikeCount + GAME_MESSAGE.strike : '';

		return Console.print(judgeComment);
	}

	static printClear() {
		Console.print(`${GAME_MESSAGE.clear} ${GAME_MESSAGE.exit}`);
	}

	static printExit() {
		Console.print();
	}

	// static printMore() {
	// 	Console.print(GAME_MESSAGE.more);
	// }
}

export default Output;
