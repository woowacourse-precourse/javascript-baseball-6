import { MissionUtils } from "@woowacourse/mission-utils";
import BaseballView from "../View/baseballView.js";
import validate from '../Util/validation.js';


class BaseballModel {
	#randomNumber = [];
	#userInputNumber;
	
	constructor() {
		this.generateBaseballNumber()
	}

	getNumber() {
		return this.#randomNumber;
	}

	generateBaseballNumber() {
		while (this.#randomNumber.length < 3) {
			const targetNumber = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!this.#randomNumber.includes(targetNumber)) {
				this.#randomNumber.push(targetNumber);
			}
		}
	}

	async getUserInputNumber() {
		const input = await BaseballView.getUserInput('숫자를 입력해주세요 : ');
		validate.isNum(input);
		this.#userInputNumber = input.split('');
		validate.sizeCheck(3, input);
		validate.isDuplicatedNumber(input);
	}

	checkMatchingNumber() {

	}

	isGameOver() {
	}
}

export default BaseballModel;