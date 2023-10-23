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

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}
getUserNumber();
//isDigit("gggg");
export default App;
