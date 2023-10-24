import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";

function getRandomNumber() {
  // 컴퓨터 숫자 생성 
  let comNumbers = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = Random.pickNumberInRange(1, 9)
    while (comNumbers.includes(randomNumber)) {
      randomNumber = Random.pickNumberInRange(1, 9)
    }
    comNumbers.push(randomNumber);
  }

  return comNumbers.join("");
}

async function getUserNum() {
  const USER_NUM = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

  if (USER_NUM.length !== 3) {
    throw new Error('[ERROR]')
  }

  return USER_NUM;
}

function checkUserNum(COM_NUM, USER_NUM) {

  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (USER_NUM[i] === COM_NUM[i]) {
      strike++;
    } else if (USER_NUM.includes(COM_NUM[i])) {
      ball++;
    }
  }

  if (strike === 0 && ball === 0) {
    Console.print("낫싱")
  } else if (strike === 0) {
    Console.print(`${ball}볼`)
  } else if (ball === 0) {
    Console.print(`${strike}스트라이크`)
  } else {
    Console.print(`${ball}볼 ${strike}스트라이크`)
  }
  return strike;
}


class App {

  async play() {

    let COM_NUMBER = getRandomNumber()

    Console.print("숫자 야구 게임을 시작합니다.")
    let userNum;

    while (true) {

      userNum = await getUserNum();

      let strike = checkUserNum(COM_NUMBER, userNum);

      if (strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const OVERM = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 '1', 종료하려면 '2'를 입력하세요.");

        if (OVERM === "1") {
          COM_NUMBER = getRandomNumber();
        } else if (OVERM === "2") {
          break;
        }
      }
    }
  }
}


export default App;