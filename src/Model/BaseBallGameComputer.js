import { MissionUtils } from '@woowacourse/mission-utils';
import GAME from '../constants/Game.js';
import GAME_MESSAGE from '../constants/GameMessage.js';
import isValidTryNumber from '../validation/tryNumberValidation.js';
import pickNumberInRange from '../utils/pickNumberInRange.js';

class BaseBallGameComputer {
	#answerNumber;
	#tryNumber;
	#strikeCount; // 반복되어 사용되므로 변수로 사용하려함. getStrikeCount의 복잡도가 커지면 재사용이 문제가 될 수 있으므로

	// 정답 생성
	setAnswerNumber() {
		this.#answerNumber = pickNumberInRange(
			GAME.validNumMin,
			GAME.validNumMax,
			GAME.size
		);
	}

	// 입력받은 시도 넘버의 유효성 검사 후 저장
	setTryNumber(tryNumber) {
		const tryNumberArr = tryNumber.split('').map(Number); // str -> numArr

		isValidTryNumber(tryNumberArr);

		this.#tryNumber = tryNumberArr;
	}

	// 시도 넘버의 결과 반환
	getResult() {
		// 처음 스트라이크 개수에 접근하는 것이므로 여기서 세팅한다. (재사용을 줄이기 위해서 분리한건데 괜히 다른 함수에 영향을 미치기도 하네요)
		this.#setStrikeCount();

		return [this.#getBallCount(), this.#strikeCount];
	}

	// 클리어 여부
	isClear() {
		return this.#strikeCount === GAME.size;
	}

	// 시도 넘버의 볼 개수 반환
	#getBallCount() {
		return this.#tryNumber.filter(
			(num, i) =>
				this.#answerNumber.includes(num) && num !== this.#answerNumber[i]
		).length;
	}

	// 시도 넘버의 스트라이크 개수 반환
	#getStrikeCount() {
		return this.#tryNumber.filter((num, i) => num === this.#answerNumber[i])
			.length;
	}

	#setStrikeCount() {
		this.#strikeCount = this.#getStrikeCount();
	}
}

export default BaseBallGameComputer;
