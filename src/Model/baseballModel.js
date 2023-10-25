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

	async getUserInputForRestartOrExit() {
		BaseballView.displayMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		const input = await BaseballView.getUserInput('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
		if (input == GAMEOVER) {
			return GAMEOVER;
		} else if (input == RESTART) {
			return RESTART;
		} else {
			throw '[ERROR] 입력값은 1 또는 2 만 가능합니다.';
		}
	}
}

export default BaseballModel;