import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let endPoint = false;

    while (!endPoint) {
      // 게임 시작
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      // 임의의 비밀 숫자 생성
      const secret_number = randomNumber();

      let isGameOver = false;

      while (!isGameOver) {
        const userList = await getUserInput(secret_number);
        const { ballCount, strikeCount } = ballStrike(userList, secret_number);
        getScore(ballCount, strikeCount);

        if (strikeCount === 3) {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );

          let startOver = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );

          startOver = Number(startOver);

          if (startOver === 1) {
            isGameOver = true;
          } else {
            endPoint = true;
            isGameOver = true;
          }
        }
      }
    }
  }
}
//함수: 임의의 비밀숫자 생성
function randomNumber() {
  let computer = [];
  while (computer.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(randomNumber)) {
      computer.push(randomNumber);
    }
  }
  return computer;
}
//함수: 유저의 input 수집
async function getUserInput() {
  let user_guess = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  //유저의 잘못된 input 에러 처리
  if (!isValidInput(user_guess)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  } else {
    let user_guess_arr = user_guess.split("").map((e) => Number(e));
    console.log(user_guess_arr, "유저");
    return user_guess_arr;
  }
}
//함수 : 유저의 잘못된 input 에러 처리
function isValidInput(input) {
  return input.length == 3 ? true : false;
}

function ballStrike(computer, user) {
  let strikeCount = 0;
  let ballCount = 0;
  for (let i = 0; i < computer.length; i++) {
    if (computer.includes(user[i])) {
      if (computer.indexOf(user[i]) == i) {
        strikeCount++;
      } else ballCount++;
    }
  }
  return { ballCount, strikeCount };
}

function getScore(ball, strike) {
  if (strike == 0 && ball == 0) MissionUtils.Console.print("낫싱");
  else {
    let score = "";
    if (ball) {
      score += `${ball}볼 `;
    }
    if (strike) {
      score += `${strike}스트라이크`;
    }

    MissionUtils.Console.print(score);
  }
}
export default App;
