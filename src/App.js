import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_LENGTH = 3;

function InputException(message) {
  this.message = message;
  this.name = "InputException";
}

// 컴퓨터가 3개의 난수 배열을 생성하는 함수
const getComputerNumber = () => {
  const computer = [];
  while (computer.length < INPUT_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

// 플레이어에게 숫자를 입력받는 함수
const readFromPlayer = () => {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      console.log(answer);
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

// 결과를 출력하는 함수
const printResult = (strikeCnt, ballCnt) => {
  if (strikeCnt === INPUT_LENGTH) {
    MissionUtils.Console.print(`${strikeCnt}스트라이크`);
    MissionUtils.Console.print(
      `${strikeCnt}개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
  } else {
    const ballText = ballCnt > 0 ? `${ballCnt}볼` : "";
    const strikeText = strikeCnt > 0 ? `${strikeCnt}스트라이크` : "";
    MissionUtils.Console.print(
      ballText && strikeText
        ? `${ballText} ${strikeText}`
        : ballText
        ? `${ballText}`
        : strikeText
        ? `${strikeText}`
        : "낫싱"
    );
    MissionUtils.Console.print("다시 게임을 시작하는 기능 추가예정");
  }
};

class App {
  async play() {
    // MissionUtils.Console.print(getComputerNumber());
    // MissionUtils.Console.print(await readFromPlayer());
    const computerList = getComputerNumber();
    const humanList = await readFromPlayer();
    const { strikeCnt, ballCnt } = compareNumber(computerList, humanList);
    printResult(strikeCnt, ballCnt);
  }
}

MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
const app = new App();
app.play();

export default App;
