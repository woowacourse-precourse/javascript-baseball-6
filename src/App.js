import { Random, Console } from '@woowacourse/mission-utils';
import {
	COMMENT_START,
	COMMENT_ASK_INPUT,
	COMMENT_END,
	RESULT,
	DECISION,
	ERROR_NAME,
	ERROR_MESSAGE
} from './constants';

const getComputerInput = () => {
	try {
		const computerArr = [];
		while (computerArr.length < 3) {
			const number = Random.pickNumberInRange(1, 9);
			if (!computerArr.includes(number)) {
				computerArr.push(number);
			}
		}
		return computerArr;
	} catch (error) {}
};

const compareUserComputer = (userArr, computerArr) => {
	let strike = 0;
	let ball = 0;

	//strike 계산
	for (let i = 0; i < 3; i+=1) {
		if (userArr[i] === computerArr[i]) {
			strike+=1;
		}
	}
	const ballArr = userArr.filter(item => computerArr.includes(item));
	ball = ballArr.length - strike;
	return {
		strike: strike,
		ball: ball
	};
};

const validateUserInput = userInput => {
	try {
		if (userInput.length === 3) {
			const userArr = userInput.split('').map(num => +num);
			if (userArr.includes(0)) {
				throw new MyError(
					ERROR_NAME,
					ERROR_MESSAGE.INVALID_INPUT,
					ERROR_MESSAGE.ONLY_ONE_TO_NINE
				);
			} else {
				// USER_ARR 는 모두 자연수
				if (
					userArr[0] !== userArr[1] &&
					userArr[0] !== userArr[2] &&
					userArr[1] !== userArr[2]
				) {
					return userArr;
				} else {
					return false;
				}
			}
		} else {
			throw new MyError(ERROR_NAME, ERROR_MESSAGE.INVALID_INPUT);
		}
	} catch (error) {
		throw new MyError(ERROR_NAME, error);
	}
};

const getScore = (strike, ball, computerArr) => {
	if (strike === 3) {
		Console.print(RESULT.ALL_STRIKE);

		return;
	} else if (strike === 0 && ball === 0) {
		Console.print(RESULT.NOTHING);
		process(computerArr);
		return;
	} else if (strike === 0) {
		Console.print(ball + RESULT.BALL);
		return;
	} else if (ball === 0) {
		Console.print(strike + RESULT.STRIKE);
		return;
	} else {
		Console.print(ball + RESULT.BALL + ' ' + strike + RESULT.STRIKE);
	}
};

const start = async () => {
	const computerArr = getComputerInput();
	await process(computerArr);
};

const process = async computerArr => {
	try {
		const userInput = await Console.readLineAsync(COMMENT_ASK_INPUT);
		Console.print(COMMENT_ASK_INPUT + userInput);
		// 사용자이 입력값이 유효한지 확인 / boolean 반환
		const userArr = validateUserInput(userInput);
		if (userArr) {
			const { strike, ball } = compareUserComputer(userArr, computerArr);
			getScore(strike, ball, computerArr);
		} else {
			throw new MyError(ERROR_NAME, ERROR_MESSAGE.INVALID_INPUT);
		}
	} catch (error) {
		throw new MyError(ERROR_NAME, error);
	}
};
const end = async () => {
	Console.print(COMMENT_END);
	try {
		const userDecision = await Console.readLineAsync(COMMENT_END);
		switch (userDecision) {
			case DECISION.RESTART:
				await start();
				break;
			case DECISION.END:
				return;
			default:
				throw new MyError(
					ERROR_NAME,
					ERROR_MESSAGE.INVALID_INPUT,
					ERROR_MESSAGE.ONLY_ONE_OR_TWO
				);
		}
	} catch (error) {}
};

class MyError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.message = [...params];
		this.name = value;
	}
}

class App {
	async play() {
		Console.print(COMMENT_START);
		await start(); //await 있어야 유효성 검사 통과
		await end();
		return;
	}
}

export default App;
