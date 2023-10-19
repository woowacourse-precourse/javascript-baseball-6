//1부터 9까지 서로 다른 수로 이루어진 3자리의 수
//같은 수가 같은 자리에 있으면 스트라이크
//같은 수가 다른 자리에 있으면 볼
//같은 수가 전혀 없으면 낫싱
import { MissionUtils } from '@woowacourse/mission-utils';

const gameStart = () => {
	getUserInput(); // input가져와서 게임 스타트
	endGame();
};

const getUserInput = async () => {
	try {
		const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
		validateInput(userInput) && validateAnswer(userInput); //userInput 이 조건에 맞는지 확인한다
	} catch (error) {
		throw new Error(error);
	}
};

const validateAnswer = (user) => {
	const computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
	//낫싱 판별
	if (getNothing(user, computer)) {
		return MissionUtils.Console.print('낫싱');
	} else {
		const ball = getBall(user, computer);
		const strike = getStrike(user, computer);
		if (strike === 3) {
			MissionUtils.Console.print(strike && `${strike}스트라이크`);
			MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
			return;
		}
		return MissionUtils.Console.print(ball && `${ball - strike}볼` + strike && `${strike}스트라이크`);
	}
};

const endGame = async () => {
	const input = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'); // 1,2
	switch (input) {
		case 1:
			game();
			break;
		case 2:
			break;
	}
};

const getNothing = (user, computer) => {
	let total = [...computer];
	for (let i = 0; i < user.length; i++) {
		if (total.includes(user[i])) {
		} else {
			total.push(user[i]);
		}
	}
	if (total.length === 6) {
		return true;
	} else {
		return false;
	}
};

const getStrike = (user, computer) => {
	let strike = 0;
	for (let i = 0; i < user.length; i++) {
		if (user[i] === computer[i]) {
			strike++;
		}
	}
	return strike;
};

const getBall = (user, computer) => {
	let sortedUser = user.sort(); //[1,2,3]
	let sortedComputer = computer.sort(); //[2,3,6]
	let j = 0;
	for (let i = 0; i < sortedUser.length; i++) {
		if (sortedUser[i] === sortedComputer[j]) {
			sortedComputer.unshift();
		}
	}
	const ball = 3 - sortedComputer.length;
	return ball;
};

//input이 조건에 맞는지 확인 후 boolean return
const validateInput = (input) => {
	const numArr = String(input)
		.split('')
		.map((num) => +num); //숫자인 배열로 만들기
	if (input.length === 3 && typeof input === 'number' && isInputExceptional(numArr)) {
		return true;
	}
};

// 배열의 숫자들이 고유한지 확인
const isInputExceptional = (arr) => {
	if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[0]) {
		return true;
	}
};

class App {
	async play() {
		MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
		gameStart();
	}
}

export default App;
