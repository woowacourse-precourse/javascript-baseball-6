import { MissionUtils } from '@woowacourse/mission-utils';
// function start() {
// 	const computer = makeRandomNumber();
// 	try {
// 		getUserInput(computer);
// 	} catch (error) {
// 		MissionUtils.Console.print(error);
// 		throw error;
// 	}
// }
// function makeRandomNumber() {
// 	const computer = [];
// 	while (computer.length < 3) {
// 		const number = MissionUtils.Random.pickNumberInRange(1, 9);
// 		if (!computer.includes(number)) {
// 			computer.push(number);
// 		}
// 	}
// 	return computer;
// }
// async function getUserInput(computer) {
// 	const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
// 	MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);
// 	try {
// 		validateUserInput(userInput, computer);
// 	} catch (error) {
// 		MissionUtils.Console.print(error);
// 		throw error;
// 	}
// }
// function isRepeated(user) {
// 	let newArr = [];
// 	for (let i = 0; i < user.length; i++) {
// 		if (newArr.includes(user[i])) {
// 			continue;
// 		} else {
// 			newArr.push(user[i]);
// 		}
// 	}
// 	return newArr.length === 3 ? false : true;
// }
// function validateUserInput(userInput, computer) {
// 	if (userInput && String(userInput).length === 3) {
// 		const user = String(userInput)
// 			.split('')
// 			.map((number) => +number && +number); //arr
// 		if (user[0] && user[1] && user[2]) {
// 			if (!isRepeated(user)) {
// 				const { strike, ball } = compareUserComputer(user, computer);
// 				returnScore(strike, ball);
// 				return finishGame();
// 			} else {
// 				try {
// 					throw '[ERROR] 서로 다른 수를 입력해주세요';
// 				} catch (error) {
// 					MissionUtils.Console.print(error);
// 					throw error;
// 				}
// 			}
// 		} else {
// 			try {
// 				throw '[ERROR] 숫자만 입력해주세요.';
// 			} catch (error) {
// 				MissionUtils.Console.print(error);
// 				throw error;
// 			}
// 		}
// 	}
// 	if (userInput && String(userInput).length !== 3) {
// 		try {
// 		} catch (error) {
// 			throw '[ERROR] 세자리 숫자를 입력해주세요.';
// 			MissionUtils.Console.print(error);
// 		}
// 	}
// }
// async function finishGame() {
// 	try {
// 		const finalResult = await MissionUtils.Console.readLineAsync(
// 			'게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
// 		);
// 		switch (finalResult) {
// 			case 1:
// 				// 게임 새로 시작
// 				start();
// 				break;
// 			case 2:
// 				//게임 끝
// 				break;
// 		}
// 	} catch (error) {
// 		MissionUtils.Console.print(error);
// 		throw error;
// 	}
// }
// function returnScore(strike, ball) {
// 	const strikeScore = strike ? `${strike}스트라이크` : '';
// 	const ballScore = ball ? `${ball}볼` : '';
// 	if (strike === 3) {
// 		MissionUtils.Console.print(strikeScore);
// 		MissionUtils.Console.print('3개의 숫자를 모두 맞추셨습니다! 게임 종료');
// 	} else {
// 		if (strike === 0) {
// 			MissionUtils.Console.print(ballScore);
// 			if (ball === 0) {
// 				MissionUtils.Console.print('낫싱');
// 			}
// 		} else {
// 			if (ball === 0) {
// 				MissionUtils.Console.print(strikeScore);
// 			} else {
// 				MissionUtils.Console.print(ballScore + ' ' + strikeScore);
// 			}
// 		}
// 	}
// }
// function compareUserComputer(user, computer) {
// 	let strike = 0;
// 	let ball = 0;
// 	for (let i = 0; i < user.length; i++) {
// 		for (let j = 0; j < computer.length; j++) {
// 			if (user[i] === computer[j]) {
// 				strike++;
// 			} else if (user.includes(computer[i])) {
// 				ball++;
// 			}
// 		}
// 	}
// 	return {
// 		strike: strike,
// 		ball: ball,
// 	};
// }
class MyError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.message = value;
		this.name = '[ERROR]';
	}
}

class App {
	async play(isRepeated) {
		!isRepeated && MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
		await start();
		await end();
	}
}

export default App;

const getComputerInput = () => {
	const computer = [];
	while (computer.length < 3) {
		const number = MissionUtils.Random.pickNumberInRange(1, 9);
		if (!computer.includes(number)) {
			computer.push(number);
		}
	}
	return computer;
};

const compareUserComputer = (userArr, computerArr) => {
	let strike = 0;
	let ball = 0;
	//strike 계산
	for (let i = 0; i < 3; i++) {
		if (userArr[i] === computerArr[i]) {
			strike++;
		}
	}
	const ballArr = userArr.filter((item) => computerArr.includes(item));
	ball = ballArr.length - strike;
	return {
		strike: strike,
		ball: ball,
	};
};

const getScore = (strike, ball) => {
	if (strike === 3) {
		MissionUtils.Console.print('3스트라이크');
		MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		return;
	}
	if (strike === 0 && ball === 0) {
		MissionUtils.Console.print('낫싱');
		return;
	}
	if (strike === 0) {
		MissionUtils.Console.print(`${ball}볼`);
		return;
	}
	if (ball === 0) {
		MissionUtils.Console.print(`${strike}스트라이크`);
		return;
	}
	MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
	return;
};

const end = async () => {
	try {
		const decision = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
		MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
		switch (decision) {
			case 1:
				await play(true);
				break;
			case 2:
				return;
		}
	} catch (error) {
		throw new MyError('[ERROR]', error.message);
	}
};
const start = async () => {
	let userInput = '';
	try {
		userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
		MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);
		if (userInput.length !== 3) {
			throw new MyError('[ERROR]', '세자리를 입력해주세요.');
		} else {
			//userInput.length === 3
			const userArr = userInput.split('').map((num) => +num);
			if (userArr.includes(0)) {
				throw new MyError('[ERROR]', '1부터 9까지의 자연수만 가능합니다.');
			} else {
				// userArr 는 모두 자연수
				if (userArr[0] !== userArr[1] && userArr[0] !== userArr[2] && userArr[1] !== userArr[2]) {
					//값이 전부 다르면
					//드디어 사용자 숫자와 비교 시작 가능
					const computerArr = getComputerInput();
					const { strike, ball } = compareUserComputer(userArr, computerArr);
					getScore(strike, ball);
					return;
				} else {
					//같은 애가 있다면
					throw new MyError('[ERROR]', '다 다른 숫자여야 합니다.');
				}
			}
		}
	} catch (error) {
		throw new MyError('[ERROR]', error.message);
	}
};
