import { Random, Console } from "@woowacourse/mission-utils";

// 비교 할 수의 총 갯수를 지정하는 상수
const INPUT_LENGTH = 3;

// 컴퓨터가 3개의 난수 배열을 생성하는 함수
const getComputerNumber = () => {
  const computer = [];
  while (computer.length < INPUT_LENGTH) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

// 사용자로부터 입력을 받는 함수
const readFromPlayer = async () => {
  let answer = "";
  try {
    answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
  } catch (e) {
    // reject 되는 경우
  }
  if (isValid(answer)) {
    return readToList(answer);
  } else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};

// 입력된 수의 유효성을 검사하는 함수
const isValid = (answer) => {
  if (
    answer.length === INPUT_LENGTH &&
    answer >= 100 &&
    answer <= 999 &&
    !isDuplicated(answer)
  ) {
    return true;
  } else {
    return false;
  }
};

// 유효성 검사 항목 중 중복된 숫자가 있는지 검사하는 함수
function isDuplicated(str) {
  const charSet = new Set();
  for (let char of str) {
    if (charSet.has(char)) {
      return true; // Found a duplicate character
    }
    charSet.add(char);
  }
  return false; // No duplicate characters found
}

// 입력받은 숫자를 리스트 형식으로 반환하는 함수
const readToList = (answer) => {
  const arr = [...answer].map(Number);
  return arr;
};

// 두 배열을 비교하는 함수
const compareNumber = (computerList, humanList) => {
  let strikeCnt = 0;
  let ballCnt = 0;
  for (let i = 0; i < computerList.length; i++) {
    if (computerList[i] === humanList[i]) {
      strikeCnt += 1;
    } else {
      for (let j = 0; j < humanList.length; j++) {
        if (computerList[i] === humanList[j]) {
          ballCnt += 1;
        }
      }
    }
  }
  return { strikeCnt, ballCnt };
};

// 게임을 재시작할지 종료할지 입력받는 함수
const readRestart = async () => {
  let answer = "";
  try {
    answer = await Console.readLineAsync(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
    );
  } catch (e) {
    // reject 되는 경우
  }
  if (answer === "1" || answer === "2") {
    return answer;
  } else {
    throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};

// 결과를 출력하는 함수
const printResult = (strikeCnt, ballCnt) => {
  if (strikeCnt === INPUT_LENGTH) {
    Console.print(`${strikeCnt}스트라이크`);
    Console.print(`${strikeCnt}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    return true;
  } else {
    const ballText = ballCnt > 0 ? `${ballCnt}볼` : "";
    const strikeText = strikeCnt > 0 ? `${strikeCnt}스트라이크` : "";
    Console.print(
      ballText && strikeText
        ? `${ballText} ${strikeText}`
        : ballText
        ? `${ballText}`
        : strikeText
        ? `${strikeText}`
        : "낫싱"
    );
    return false;
  }
};

class App {
  async play() {
    let success = false;

    Console.print("숫자 야구 게임을 시작합니다.");

    do {
      const computerList = getComputerNumber();
      let humanList = [];

      // 3스트라이크에 성공하지 못하면 성공할 때 까지 루프한다.
      while (!success) {
        try {
          humanList = await readFromPlayer();
        } catch (e) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        const { strikeCnt, ballCnt } = compareNumber(computerList, humanList);
        success = printResult(strikeCnt, ballCnt);
      }
      try {
        const restart = await readRestart();
        if (restart === "1") {
          success = false;
        } else if (restart === "2") {
          return;
        }
      } catch (e) {
        // Console.print(e);
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } while (true);
  }
}

const app = new App();
app.play();

export default App;
