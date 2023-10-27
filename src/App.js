import { Random, Console } from '@woowacourse/mission-utils';
import { COMMENT, RESULT, DECISION, ERROR } from './constants';

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
	} catch (error) {
		throw new MyError(ERROR.NAME, error.message);
	}
};

const compareUserComputer = (userArr, computerArr) => {
	let strike = 0;
	let ball = 0;

	//strike 계산 // 고차함수로 변경해보기
	for (let i = 0; i < 3; i += 1) {
		if (userArr[i] === computerArr[i]) {
			strike += 1;
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
			const userArr = Array.from(userInput, Number);
			if (userArr.includes(0)) {
				throw new MyError(
					ERROR.NAME,
					ERROR.MESSAGE.INVALID_INPUT,
					ERROR.MESSAGE.ONLY_ONE_TO_NINE
				);
			} // 중복검사는 Set 사용해보기
			if (
				userArr[0] !== userArr[1] &&
				userArr[0] !== userArr[2] &&
				userArr[1] !== userArr[2]
			) {
				return userArr;
			}
		} else {
			throw new MyError(
				ERROR.NAME,
				ERROR.MESSAGE.INVALID_INPUT,
				ERROR.MESSAGE.ONLY_THREE
			);
		}
	} catch (error) {
		throw new MyError(ERROR.NAME, error.message);
	}
};

const getScore = (strike, ball, computerArr) => {
	if (strike === 3) {
		Console.print(RESULT.ALL_STRIKE);
		return;
	}
	if (strike === 0 && ball === 0) {
		Console.print(RESULT.NOTHING);
		continueGame(computerArr);
		return;
	}
	if (strike === 0) {
		Console.print(ball + RESULT.BALL);
		return;
	}
	if (ball === 0) {
		Console.print(strike + RESULT.STRIKE);
		return;
	}
	Console.print(ball + RESULT.BALL + ' ' + strike + RESULT.STRIKE);
};

const startGame = async () => {
	const computerArr = getComputerInput();
	await continueGame(computerArr);
};

const continueGame = async computerArr => {
	try {
		const userInput = await Console.readLineAsync(COMMENT.ASK_INPUT);
		Console.print(COMMENT.ASK_INPUT + userInput);
		const userArr = validateUserInput(userInput);
		if (userArr) {
			const { strike, ball } = compareUserComputer(userArr, computerArr);
			getScore(strike, ball, computerArr);
		} else {
			throw new MyError(ERROR.NAME, ERROR.MESSAGE.INVALID_INPUT);
		}
	} catch (error) {
		throw new MyError(ERROR.NAME, error.message);
	}
};
const endGame = async () => {
	Console.print(COMMENT.END);
	try {
		const userDecision = await Console.readLineAsync(COMMENT.END);
		switch (userDecision) {
			case DECISION.RESTART:
				await startGame();
				break;
			case DECISION.END:
				return;
			default:
				throw new MyError(
					ERROR.NAME,
					ERROR.MESSAGE.INVALID_INPUT,
					ERROR.MESSAGE.ONLY_ONE_OR_TWO
				);
		}
	} catch (error) {
		throw new MyError(ERROR.NAME, error.message);
	}
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
		Console.print(COMMENT.START);
		await startGame(); //await 있어야 유효성 검사 통과
		await endGame();
		return;
	}
}

export default App;
