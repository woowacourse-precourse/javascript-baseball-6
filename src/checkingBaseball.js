import { Console } from '@woowacourse/mission-utils';

export default function checkingBaseball(player, computer) {
	try {
		const BALL = checkBall(player, computer);
		const STRIKE = checkStrike(player, computer);
		printResult(BALL, STRIKE);
		if (STRIKE === 3) {
			return false;
		}
		return true;
	} catch (error) {
		Console.print(error);
	}
}

const checkBall = function countingBall(player, computer) {
	let ballCount = 0;
	for (let i = 0; i < 3; i++) {
		if (computer.includes(player[i])) {
			ballCount += 1;
		}
	}
	return ballCount;
};

const checkStrike = function countingStrike(player, computer) {
	let strikeCount = 0;
	for (let i = 0; i < 3; i++) {
		if (player[i] === computer[i]) {
			strikeCount += 1;
		}
	}
	return strikeCount;
};

const printResult = function resultPhrase(ball, strike) {
	if (!ball) {
		Console.print(`낫싱`);
	} else if (!strike) {
		Console.print(`${ball}볼`);
	} else if (ball === 3 && strike === 3) {
		Console.print(`${strike}스트라이크`);
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
	} else if (!(ball - strike)) {
		Console.print(`${strike}스트라이크`);
	} else {
		Console.print(`${ball - strike}볼 ${strike}스트라이크`);
	}
};
