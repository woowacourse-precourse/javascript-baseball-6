import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    let isContinue = 1;
    while (isContinue == 1) {
      Console.print("숫자 야구 게임을 시작합니다.");
      const answer = makeNumbers();
      while (1) {
        const userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
        checkInputNumbers(userNumber);

        if (userNumber == answer) {
          Console.print(`3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
          isContinue = await Console.readLineAsync("");
          break;
        }

        await checkResultsForUserNumber(userNumber, answer);
      }
    }
  }
}

/** 컴퓨터가 숫자를 만든다
 * @returns {answer} 맞춰야할 숫자
 */
function makeNumbers() {
  const numbers = [];
  while (numbers.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!numbers.includes(number)) numbers.push(number);
  }
  return numbers.join("");
}

/** 유저의 입력값이 잘못된 입력값인지 확인
 * @param {userNumber} 유저가 입력한 값
 */
function checkInputNumbers(userNumber) {
  const check = /^[0-9]+$/;
  const isValidValue = verifyUsersInputValue(userNumber);

  if (userNumber.length != 3 || !check.test(userNumber) || isValidValue) {
    Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    throw new Error("[ERROR]");
  }
}

/** 유저의 입력값이 유효한 값인지 확인
 * @param {userNumber} 유저가 입력한 값
 * @return {isValidValue} 유저의 입력값중 같은 숫자가 있는지 여부
 */
function verifyUsersInputValue(userNumber) {
  const userNumberArr = userNumber.split("");
  const result = [
    ...new Set(userNumberArr.filter((item, index) => userNumberArr.indexOf(item) !== index)),
  ];

  return result.length ? true : false;
}

/** 유저의 입력값에 대한 결과 출력
 * @param {userNumber} 유저가 입력한 값
 * @param {answer}  맞춰야할 숫자의 배열
 */
async function checkResultsForUserNumber(userNumber, answer) {
  let ballNumbers = 0;
  let strikeNumbers = 0;
  await userNumber.split("").map((number, i) => {
    if (answer[i] == number) ballNumbers++;
    else answer.includes(number) && strikeNumbers++;
  });

  if (ballNumbers || strikeNumbers) {
    let string = "";
    if (ballNumbers) string += `${ballNumbers}볼`;
    if (!!strikeNumbers) string += `${!!string.length && " "}${strikeNumbers}스트라이크`;
    Console.print(string);
  } else Console.print("낫싱");
}

export default App;
