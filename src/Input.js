import { Console } from "@woowacourse/mission-utils";

const validCheck = (num, userNumber) => {
  if (num === 0) {
    Console.print("1-9까지의 숫자만 입력 가능합니다.");
  }
  if (userNumber.includes(num)) {
    Console.print(`${num} 중복.`);
  }
  userNumber.push(num);
};

const setNumber = (input, userNumber) => {
  for (const number of input) {
    validCheck(parseInt(number), userNumber);
  }
};

const getNumber = async () => {
  const userNumber = [];
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
  setNumber(input, userNumber);
  return userNumber;
};

export default getNumber;
