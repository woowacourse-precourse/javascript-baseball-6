import { MissionUtils } from '@woowacourse/mission-utils';
import GAME from '../constants/Game.js';
import GAME_MESSAGE from '../constants/GameMessage.js';
import isValidTryNumber from '../validation/tryNumberValidation.js';

class BaseBallGameComputer {
	#answerNumber;
	#tryNumber;

	setAnswerNumber() {
		this.#answerNumber = this.#createAnswerNumber();
	}

	// 유효성 검사를 위한
	setTryNumber(tryNumber) {
		const tryNumberArr = tryNumber.split('').map(Number); // str -> numArr

		isValidTryNumber(tryNumberArr);

		this.#tryNumber = tryNumberArr;
	}

	// TODO: 리펙터링
	#createAnswerNumber() {
		const answerNumberArr = [];

		while (answerNumberArr.length < GAME.size) {
			const number = MissionUtils.Random.pickNumberInRange(
				GAME.validNumMin,
				GAME.validNumMax
			);
			if (!answerNumberArr.includes(number)) answerNumberArr.push(number);
		}

		return answerNumberArr;
	}

	// TODO: 리펙터링
	getBallAndStrikeCounts() {
		return [this.#getBallCount(), this.#getStrikeCount()];
	}

	res() {
		return this.#getStrikeCount() === GAME.size;
	}

	// 볼카운트에는 스트라이크 카운트도 포함되어있다. 빼고 전해주는게 좋을 것 같다.
	#getBallCount() {
		return this.#tryNumber.reduce((count, curNum, idx) => {
			if (
				curNum !== this.#answerNumber[idx] &&
				this.#answerNumber.includes(curNum)
			)
				return count + 1;
			else return count;
		}, 0);
	}

	#getStrikeCount() {
		return this.#tryNumber.reduce(
			(count, curNum, idx) =>
				curNum === this.#answerNumber[idx] ? count + 1 : count,
			0
		);
	}
}

export default BaseBallGameComputer;
