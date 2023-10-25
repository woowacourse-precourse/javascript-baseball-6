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
	}

	checkMatchingNumber() {
	}

	isGameOver() {
	}
}

export default BaseballModel;