import { MissionUtils } from "@woowacourse/mission-utils";
import isValidNumber from "./validation";
//게임 시작하기

//겹치지 않는 숫자 생성하기
function makeRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    let newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (computer.indexOf(newNumber) == -1) {
      computer.push(newNumber);
    }
  }
  return computer;
}

async function tryNumbers(computer) {
  let user = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해 주세요 : "
  );
  if (!isValidNumber(user)) {
    throw new Error();
  } else {
    user = [...user].map((num) => parseInt(num));
    checkNumber(computer, user);
  }
}

//숫자가 정답인지 체크하기
function checkNumber(computer, user) {
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
  makeText(result, computer);
  if (result.strike === 3) {
    askMoreGame();
  } else {
    tryNumbers(computer);
  }
}

//텍스트 생성하기
function makeText(result) {
  const { ball, strike } = result;
  let answer = [];
  if (ball > 0) {
    answer.push(`${ball}볼`);
  }
  if (strike > 0) {
    answer.push(`${strike}스트라이크`);
  }
  if (ball == 0 && strike == 0) {
    answer.push("낫싱");
  }
  MissionUtils.Console.print(answer.join(" "));
}

//한번 더 게임할건지 묻기
async function askMoreGame() {
  // MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  // MissionUtils.Console.print("1볼 1스트라이크");
  try {
    const endChoice = await MissionUtils.Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (endChoice == "1") {
      MissionUtils.Console.print("1실시");
      await gamePlay(); // gamePlay 함수를 await로 호출
    } else if (endChoice == "2") {
      MissionUtils.Console.print("2실시");
      // 게임 종료 처리
    } else {
      // 에러 처리
      throw new Error("[ERROR] 1, 2 중 선택");
    }
  } catch (err) {
    MissionUtils.Console.print("[ERROR]");
  }
}

export default { makeRandomNumber, tryNumbers, checkNumber };
