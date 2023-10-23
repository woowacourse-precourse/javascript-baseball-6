import { Console, Random } from "@woowacourse/mission-utils";

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

const getUserNumber = async () => {
  let userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
  if (userNumber.length !== 3) {
    throw new Error("Error: 잘못된 문자열 길이");
  }
  if (!isDigit(userNumber)) {
    throw new Error("Error: 숫자가 아닌 잘못된 문자 입력");
  }
  if (isDuplicated(userNumber)) {
    throw new Error("Error: 중복된 숫자 입력");
  }
  return userNumber;
};

const isDigit = (input) => {
  for (let i = 0; i < input.length; i++) {
    const ch = input.charAt(i).charCodeAt();
    if (ch < 48 || ch > 57) {
      return false;
    }
  }
  return true;
};

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

const getStrike = (cNum, num) => {
  let count = 0;
  for (let i = 0; i < cNum.length; i++) {
    if (cNum[i] === parseInt(num.charAt(i))) {
      count++;
    }
  }
  return count;
};

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

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computerNumber = setComputerNumber();
    let userNumber = "";
    console.log(computerNumber);
    userNumber = await getUserNumber();
    while (!compareNumber(computerNumber, userNumber)) {
      userNumber = await getUserNumber();
    }
  }
}
//getUserNumber();
//isDigit("gggg");
const app = new App();
app.play();
export default App;
