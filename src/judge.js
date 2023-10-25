import { MissionUtils } from "@woowacourse/mission-utils";
import { STRINGS } from "./constants/strings";
import { getInputNumbers } from "./getInputNumbers";
import { replay } from "./replay";

export async function Judge(answer, userNumbers) {
	let ANSWER_NUMBERS = [...new Set(answer.split(""))];
	let USER_NUMBERS = [...new Set(userNumbers.split(""))];
	let ball = 0;
	let strike = 0;

	//다 맞은 경우
	if (answer === userNumbers) {
		MissionUtils.Console.print(STRINGS.THREE_STRIKE);
		MissionUtils.Console.print(STRINGS.GAME_OVER);
		return true;
	} else {
		ANSWER_NUMBERS.forEach((value, index) => {
			if (value === USER_NUMBERS[index]) {
				strike++;
			} else if (USER_NUMBERS.includes(value)) {
				ball++;
			}
		});
	}

	//점수 출력해주기
	if (strike === 0 && ball === 0) {
		MissionUtils.Console.print("낫싱");
	} else if (strike === 0) {
		MissionUtils.Console.print(`${ball}볼`);
	} else if (ball === 0) {
		MissionUtils.Console.print(`${strike}스트라이크`);
	} else if (strike > 0 && ball > 0) {
		MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
	}

	return false;
}
