import { Random, Console } from "@woowacourse/mission-utils";

/**
 * @todo 입력받은 수에서 중복된 값을 예외처리
 * 배열로 처리하기 전에 분기했던 로직에서 배열로 처리한 후 분기하는 로직으로 변경 필요
 */

// 비교 할 수의 총 갯수를 지정하는 상수
const INPUT_LENGTH = 3;

function InputException(message) {
  this.message = message;
  this.name = "InputException";
}

// 컴퓨터가 3개의 난수 배열을 생성하는 함수
const getComputerNumber = () => {
  const computer = [];
  while (computer.length < INPUT_LENGTH) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
      console.log(computer);
    }
  }
  return computer;
};

// 플레이어에게 숫자를 입력받는 함수
const readFromPlayer = () => {
  return new Promise((resolve) => {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (answer.length === INPUT_LENGTH && answer >= 100 && answer <= 999) {
        resolve(readToList(answer));
      } else {
        throw new InputException("예외가 발생했습니다.");
      }
    });
  });
};

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

//
const readRestart = () => {
  return new Promise((resolve) => {
    Console.readLine(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
      (answer) => {
        if (answer === "1" || answer === "2") {
          resolve(answer);
        } else {
          throw new InputException("예외가 발생했습니다.");
        }
      }
    );
  });
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
    let isStop = false;

    let success = false;

    Console.print("숫자 야구 게임을 시작합니다.");

    do {
      const computerList = getComputerNumber();

      // 3스트라이크에 성공하지 못하면 성공할 때 까지 루프한다.
      while (!success) {
        const humanList = await readFromPlayer();
        const { strikeCnt, ballCnt } = compareNumber(computerList, humanList);
        success = printResult(strikeCnt, ballCnt);
      }

      const restart = await readRestart();
      if (restart === "1") {
        success = false;
      } else if (restart === "2") {
        isStop = true;
        break;
      }
    } while (true);
  }
}

const app = new App();
app.play();

export default App;
