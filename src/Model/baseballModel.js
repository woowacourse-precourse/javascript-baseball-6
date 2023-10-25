import { MissionUtils } from "@woowacourse/mission-utils";
import BaseballView from "../View/baseballView.js";
import validate from '../Util/validation.js';
import outputFormat from '../Util/outputFormat.js';
import {GAMEOVER, CONTINUE, RESTART} from '../Util/constant.js';

class BaseballModel {
	#randomNumber = [];
	#userInputNumber = [];
	
	constructor() {
		this.generateBaseballNumber();
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
		this.#userInputNumber = input.split('').map((char) => {
			return parseInt(char);
		});
		validate.sizeCheck(3, input);
		validate.isDuplicatedNumber(input);
	}

	checkMatchingNumber() {
		let ball = 0;
		let strike = 0;
		this.#randomNumber.forEach((number, i) => {
			const index = this.#userInputNumber.indexOf(number);
			if (index == -1) return ;
			if (index == i) {
				strike++;
			} else {
				ball++;
			}
		});
		BaseballView.displayMessage(outputFormat(ball, strike));
		if (strike === 3) {
			return GAMEOVER;
		}
		return CONTINUE;
	}
}

export default BaseballModel;