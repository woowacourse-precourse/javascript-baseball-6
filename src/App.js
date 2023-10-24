import { MissionUtils, Console } from "@woowacourse/mission-utils";

const inputQuery = [
  "숫자를 입력해주세요. : ",
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
];

async function getUsernumber() {
  try {
    const usernumber = await Console.readLineAsync(inputQuery[0]);
    return usernumber;
  } catch (error) {}
}

function convertNumberToList(number) {
  const str = String(number);
  let strList = [];
  for (let i = 0; i < str.length; i++) {
    strList.push(Number(str[i]));
  }
  return strList;
}

function compareComputerAndUser(computerNumberList, userNumberList) {
  let ball = 0,
    strike = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (computerNumberList[i] === userNumberList[j]) {
        if (i == j) strike += 1;
        else ball += 1;
      }
    }
  }

  if (strike === 3) {
    Console.print("3 개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return 1;
  } else {
    if (ball) {
      Console.print(ball);
      Console.print("볼");
      if (!strike) Console.print("\n");
    }
    if (strike) {
      Console.print(strike);
      Console.print("스트라이크\n");
    }
    if (!ball && !strike) {
      Console.print("낫싱");
    }
    return 0;
  }
}

class App {
  async play() {
    let repeatFlag = 1;
    Console.print("숫자 야구 게임을 시작합니다.");

    while (repeatFlag === 1) {
      let correctFlag = 0;
      const computerNumber = MissionUtils.Random.pickNumberInRange(1, 999);

      while (correctFlag === 0) {
        const usernumber = await getUsernumber();

        //각각의 숫자를 배열로 변환
        const computerNumberList = convertNumberToList(computerNumber);
        const userNumberList = convertNumberToList(usernumber);

        //숫자 비교
        const compareResult = compareComputerAndUser(
          computerNumberList,
          userNumberList
        );

        if (compareResult === 1) {
          correctFlag = 1;
          const restartFlag = await Console.readLineAsync(inputQuery[1]);
          if (restartFlag === 2) {
            Console.print("게임을 종료합니다. 수고하셨습니다.");
            repeatFlag = 0;
          }
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
