import { Console } from '@woowacourse/mission-utils';

export const getStrikeAndBall = (computerNumber, userNumber) => {
	let ballCount = 0;
	let strikeCount = 0;

	computerNumber.forEach((element, index) => {
		if (userNumber.indexOf(element) === index) strikeCount += 1;
		if (![-1, index].includes(userNumber.indexOf(element))) ballCount += 1;
	});

	return { ballCount, strikeCount };
};

export const printBallCount = (ballCount, strikeCount) => {
	if (ballCount !== 0 && strikeCount !== 0) {
		Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
		return;
	}
	if (ballCount !== 0) {
		Console.print(`${ballCount}볼`);
		return;
	}
	if (strikeCount !== 0) {
		Console.print(`${strikeCount}스트라이크`);
		return;
	}
	if (ballCount === 0 && strikeCount === 0) {
		Console.print('낫싱');
	}
};
