import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

//게임 시작하기
const gameStart = () => {
  makeRandomNumber();
};

//겹치지 않는 숫자 생성하기
const makeRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    let newNumber = Random.pickNumberInRange(1, 9);
    if (computer.indexOf(newNumber) == -1) {
      computer.push(newNumber);
    }
  }
  tryNumbers(computer);
};

//숫자 입력하기
const tryNumbers = async (computer) => {
  let user = await Console.readLineAsync("숫자를 입력해 주세요 : ");
  user = [...user].map((num) => parseInt(num));
  checkNumber(computer, user);
};

//숫자가 정답인지 체크하기
const checkNumber = (computer, user) => {
  let result = {
    ball: 0,
    strike: 0,
  };

  user.map((num, idx) => {
    if (computer[idx] === num) {
      result.strike++;
    } else if (computer.includes(num)) {
      result.ball++;
    }
  });

  if (result.strike === 3) {
    askMoreGame();
  } else {
    makeText(result, computer);
    tryNumbers(computer);
  }
};

//텍스트 생성하기
const makeText = (result) => {
  const { ball, strike } = result;
  let answer = [];
  if (ball > 0) {
    answer.push(`${ball}볼`);
  }
  if (strike > 0) {
    answer.push(`${strike}스트라이크`);
  }
  if (ball == 0 && strike == 0) {
    answer.pop("낫싱");
  }
  Console.print(answer.join(" "));
};

//한번 더 게임할건지 묻기
const askMoreGame = async () => {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const endChoice = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (endChoice === "1") {
    gameStart();
  } else if (endChoice === "2") {
    return;
  } else {
    throw new Error();
  }
};

gameStart();
export default gameStart;
