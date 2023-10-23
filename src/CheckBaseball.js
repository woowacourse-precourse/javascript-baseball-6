import { Console } from '@woowacourse/mission-utils';

export default function CheckBaseball(player, computer) {
	try {
		let BALL = CheckBall(player, computer);
		let STRIKE = CheckStrike(player, computer);
		PrintResult(BALL, STRIKE);
		if (STRIKE === 3) {
			return false;
		}
		return true;
	} catch (error) {
		console.log(error);
	}
}

function CheckBall(player, computer) {
	let BALL = 0;
	for (let i = 0; i < 3; i++) {
		if (computer.includes(player[i])) {
			BALL += 1;
		}
	}
	return BALL;
}
function CheckStrike(player, computer) {
	let STRIKE = 0;
	for (let i = 0; i < 3; i++) {
		if (player[i] === computer[i]) {
			STRIKE += 1;
		}
	}
	return STRIKE;
}

function PrintResult(ball, strike) {
	if (!ball) {
		Console.print(`낫싱`);
	} else if (!strike) {
		console.log(`${ball}볼`);
	} else if (ball === 3 && strike === 3) {
		console.log(`${strike}스트라이크`);
	} else {
		console.log(`${ball}볼 ${strike}스트라이크`);
	}
}
