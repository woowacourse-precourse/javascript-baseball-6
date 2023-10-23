import { MissionUtils } from "@woowacourse/mission-utils";
const [REPLAY, NUMBER] = ["replay", "number"];

function getRandomNum() {
	const computer = [];
	while (computer.length < 3) {
		const number = MissionUtils.Random.pickNumberInRange(1, 9);
		if (!computer.includes(number)) {
			computer.push(number);
		}
	}
	return computer.join("");
}

function playGame(userNum, comNum) {
	let strike = 0;
	let ball = 0;
	let result = "";

	[...userNum].map((v, i) => {
		if (comNum[i] === v) {
			strike++;
			return "스트라이크";
		} else if (comNum.includes(v)) {
			ball++;
			return "볼";
		} else return "낫싱";
	});

	result = (ball ? ball + "볼 " : "") + (strike ? strike + "스트라이크" : "");

	return result ? result : "낫싱";
}

async function getUserInput(value) {
	let userNum = "";
	let replay = "";
	try {
		if (value === NUMBER) {
			userNum = await MissionUtils.Console.readLineAsync(
				"숫자를 입력해주세요 : "
			);
		} else if (value === REPLAY) {
			replay = await MissionUtils.Console.readLineAsync(
				"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
			);
		}
	} catch (error) {}
	return userNum ? userNum : replay;
}

async function guessNum() {
	const comNum = getRandomNum();
	let userNum = "";
	let replay = "";

	while (comNum !== userNum) {
		userNum = await getUserInput(NUMBER);
		MissionUtils.Console.print(playGame(userNum, comNum));
	}
	MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

	replay = await getUserInput(REPLAY);
	if (replay === "1") guessNum();
	else if (replay === "2") return;
}

async function play() {
	MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
	guessNum();
}
play();
