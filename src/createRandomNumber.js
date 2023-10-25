import { MissionUtils } from "@woowacourse/mission-utils";

export function createRandomNumber() {
	let answer = 0;
	let i = 0;
	const opponentNumbers = [];
	for (i = 0; i < 3; i++) {
		const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
		if (!opponentNumbers.includes(randomNumber)) {
			opponentNumbers.push(randomNumber);
		}
	}
	answer = opponentNumbers.join("");
	return answer;
}
