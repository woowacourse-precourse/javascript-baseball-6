import { Random, Console } from "@woowacourse/mission-utils";

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

async function convertNumberToList(number) {
  const str = String(number);
  let strList = [];
  for (let i = 0; i < str.length; i++) {
    strList.push(Number(str[i]));
  }
  return strList;
}

async function compareComputerAndUser(computerNumberList, userNumberList) {
  let ball = 0,
    strike = 0;

  for (let i = 0; i < computerNumberList.length; i++) {
    for (let j = 0; j < userNumberList.length; j++) {
      if (computerNumberList[i] === userNumberList[j]) {
        if (i == j) strike += 1;
        else ball += 1;
      }
    }
  }

  if (
    strike === computerNumberList.length &&
    userNumberList.length === computerNumberList.length
  ) {
    Console.print(`${strike}스트라이크`);
    Console.print(`${strike}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    return 1;
  } else {
    if (ball === 0 && strike === 0) Console.print("낫싱");
    else {
      if (ball && strike) Console.print(`${ball}볼 ${strike}스트라이크`);
      else if (ball) Console.print(`${볼}볼`);
      else Console.print(`${strike}스트라이크`);
    }
    return 0;
  }
}

async function getUserRepeat() {
  try {
    const userrepeat = await Console.readLineAsync(inputQuery[1]);
    return userrepeat;
  } catch (error) {}
}

async function checkGameRepeat(compareResult) {
  if (compareResult === 1) {
    const restartFlag = await getUserRepeat();
    if (restartFlag === 2) {
      Console.print("게임을 종료합니다. 수고하셨습니다.");
      return 0;
    } else return restartFlag;
  }
}

class App {
  async play() {
    let repeatFlag = 1;
    Console.print("숫자 야구 게임을 시작합니다.");
    //for (let k = 0; k < 3; k++)
    //while (repeatFlag === 1)
    while (repeatFlag === 1) {
      let correctFlag = 0;
      const computerNumber = Random.pickNumberInRange(100, 999);
      //for (let v = 0; v < 3; v++)
      //while (correctFlag === 0)
      while (correctFlag === 0) {
        const usernumber = await getUsernumber();
        if (usernumber === undefined) {
          throw "[ERROR]";
        }

        //각각의 숫자를 배열로 변환
        const computerNumberList = await convertNumberToList(computerNumber);
        const userNumberList = await convertNumberToList(usernumber);

        //숫자 비교
        const compareResult = await compareComputerAndUser(
          computerNumberList,
          userNumberList
        );

        if (compareResult === 1) correctFlag = 1;
        if (correctFlag === 1) {
          repeatFlag = await checkGameRepeat(compareResult);
          if (repeatFlag !== 1 && repeatFlag !== 2) {
            repeatFlag = 0;
            throw "[ERROR]";
          }
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
