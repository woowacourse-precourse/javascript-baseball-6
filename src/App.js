import { Console, Random } from "@woowacourse/mission-utils";

// 1. 컴퓨터 숫자 선택
const setComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
};

// 2. 유저 숫자 입력
const getUserNumber = async () => {
  const userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
  // 예외 1. 문자열 길이가 3이 아닌 경우
  if (userNumber.length !== 3) {
    throw new Error("[ERROR] 잘못된 문자열 길이");
  }
  // 예외 2. 숫자가 아닌 문자 입력
  if (!isDigit(userNumber)) {
    throw new Error("[ERROR] 숫자가 아닌 잘못된 문자 입력");
  }
  // 예외 3. 중복된 숫자 입력
  if (isDuplicated(userNumber)) {
    throw new Error("[ERROR] 중복된 숫자 입력");
  }
  return userNumber;
};

/**
 * 숫자로만 이루어진 문자열인지 확인하는 함수
 * 숫자로만 이루어졌으면 true 반환, 아니면 false 반환
 */
const isDigit = (input) => {
  for (let i = 0; i < input.length; i++) {
    const ch = input.charAt(i).charCodeAt();
    if (ch < 48 || ch > 57) {
      return false;
    }
  }
  return true;
};

/**
 * 중복된 문자 값이 있는지 확인하는 함수
 * 중복 값이 있으면 true, 아니면 false
 */
const isDuplicated = (input) => {
  for (let i = 0; i < input.length; i++) {
    const ch = input.charAt(i);
    if (input.indexOf(ch) !== input.lastIndexOf(ch)) {
      console.log(ch);
      return true;
    }
  }
  return false;
};

// 3. 입력받은 숫자와 컴퓨터 숫자 비교
const compareNumber = (cNum, num) => {
  const strikeNum = getStrike(cNum, num);

  if (strikeNum > 1) {
    Console.print(strikeNum + "스트라이크");
    if (strikeNum === 3) {
      return true;
    }
    return false;
  }

  const ballNum = getBall(cNum, num);

  if (ballNum < 1) {
    if (strikeNum < 1) {
      Console.print("낫싱");
      return false;
    }
    Console.print(strikeNum + "스트라이크");
    return false;
  }

  if (strikeNum < 1) {
    Console.print(ballNum + "볼");
    return false;
  }

  Console.print(ballNum + "볼 " + strikeNum + "스트라이크");
  return false;
};

/**
 * 스트라이크 처리 함수
 * 입력값 : 컴퓨터 숫자, 입력 숫자  반환값 : 스트라이크 횟수
 */
const getStrike = (cNum, num) => {
  let count = 0;
  for (let i = 0; i < cNum.length; i++) {
    if (cNum[i] === parseInt(num.charAt(i))) {
      count++;
    }
  }
  return count;
};

/**
 * 볼 처리 함수
 * 입력값 : 컴퓨터 숫자, 입력 숫자  반환값 : 볼 횟수
 */
const getBall = (cNum, num) => {
  let count = 0;
  for (let i = 0; i < cNum.length; i++) {
    const n = parseInt(num.charAt(i));
    if (cNum.includes(n) && cNum.indexOf(n) !== i) {
      count++;
    }
  }
  return count;
};

/**
 * 4. 게임 종료 처리
 * 1 입력시 true 반환, 2 입력시 false
 */
const restartGame = async () => {
  const restart = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (restart === "1") {
    return true;
  }
  if (restart === "2") {
    return false;
  }

  // 1, 2가 아닌 다른 문자 입력한 경우
  throw new Error("[ERROR] 잘못된 값을 입력");
};

// 숫자 야구 게임 Main 함수
const gamePlay = async () => {
  const computerNumber = setComputerNumber();
  let userNumber = "";
  console.log(computerNumber);
  userNumber = await getUserNumber();
  while (!compareNumber(computerNumber, userNumber)) {
    userNumber = await getUserNumber();
  }
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
};

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    do {
      await gamePlay();
    } while (await restartGame());
  }
}

export default App;
